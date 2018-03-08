FROM ruby:2.4.2
ENV ENVIRONMENT_REFRESH 2018-03-07
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash - && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update -qq && apt-get install -y build-essential libpq-dev yarn && \
    rm -rf /var/lib/apt/lists/*
RUN mkdir /dashboard
WORKDIR /dashboard
ADD Gemfile Gemfile.lock /dashboard/
RUN bundle install --jobs 20 --retry 5
ADD package.json yarn.lock /dashboard/
RUN yarn install --non-interactive --frozen-lockfile
ADD . /dashboard
RUN NODE_ENV=production RAILS_ENV=production bundle exec rails assets:precompile
EXPOSE 3000
ENV SECRET_KEY_BASE=MY_SECRET \
    RAILS_ENV=production \
    RAILS_LOG_TO_STDOUT=TRUE \
    RAILS_SERVE_STATIC_FILES=TRUE
CMD ["bundle", "exec", "rails", "server"]
