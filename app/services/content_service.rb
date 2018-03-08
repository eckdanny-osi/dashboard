# frozen_string_literal: true

# Simple layer of indirection for sourcing content
module ContentService

  @@content = nil

  def self.from_yaml(path = 'config/content.yml')
    data = YAML::load_file(path)
    @@content = {
      :resources => data['resources']
        .select { |r| r['enabled'] }
        .map do |hash|
          service_id = hash['id']
          url = ENV.fetch("#{service_id.upcase}_URL", false)
          hash['link']['href'] = url if url
          hash
        end,
      :services => data['services']
        .select { |r| r['enabled'] }
        .map do |hash|
          service_id = hash['id']
          url = ENV.fetch("#{service_id.upcase}_URL", false)
          hash['link']['href'] = url if url
          hash
        end,
    }
  end

  def self.content
    @@content
  end

  # Because i'm annoyed that the `initializer` (removed) doesn't run on code
  # changes during development.
  def self.load
    from_yaml
    content
  end

end