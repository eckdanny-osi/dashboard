# Dashboard

The program's landing page.

## QuickStart

clone this repository:

```sh
git clone https://github.com/ca-cwds/dashboard.git && cd $_
```

spin up the app and backing services with `docker-compose`:

```sh
docker-compose up
```

and open http://localhost:8888.

## About

The `dashboard` application is a simple enterprise-style portal home page. It's purpose is to:

* authenticate inbound users
* provide navigable links to <abbr title="California Automated Response and Engagement System">CARES</abbr> functional modules

> _NOTE: A more enlightened, user-centric implementation (as opposed to this systems-first approach) has been proposed and has traction with stakeholders and product personnel. That vision WILL one day come to fruition! But until the time is right to prioritize that effort, the ~~ugly~~ "cute" baby will stand._

## Content

The body/copy in the `dashboard` application is defined in `config/content.yml`. Though _content_ typically lives in a CMS or database, in order to keep the maintenance overhead low and cycle times short, a flat file will suffice.

Content "updates" can be performed quickly and easily by simply editing this file.

The structure of `content.yml` has two sections: `services` and `resources`.

Both adhere to the following structural interface:

```typescript
{
  name: String;
  id: String;
  enabled: Boolean;
  roles?: Array<String>;
  summary: String;
  link: {
    text?: String;
    href?: String;
  }
}
```

The `link#href` property may overridden by ENV var values on the `id` key to improve portability.

For example, given a `service` in `config.yaml` like:

```yaml
  - name: My Super Awesome App
    id: awesome
    enabled: true
    summary: The greatest app ever built by man.
    link:
      href: https://awesome-app.com
```

When you provide an env var `AWESOME_URL=https://meh.io`, dashboard will substitute values for `link.href` on `id`. (Use under_case for `id`)

## Environmental Variables

The following collaborating service endpoint values are **requried**:

```sh
LOGIN_BASE_URL: server URL
PERRY_BASE_URL: server URL

REDIS_HOST: hostname
REDIS_PORT: port number
```

where `server URL` is defined by:

```
https://api.example.com/v1/users?role=admin&status=active
\________________________/\____/ \______________________/
       server URL        endpoint    query parameters
```

> _NOTE: `LOGIN_BASE_URL` and `PERRY_BASE_URL` be the same values, but they are treated as two seperate entities. This is to de-couple the front-end login url from the service endpoint for api calls._

Service and Resource url overrides are optional and use the following naming convention

<NAME>\_URL: url (full, absolute or relative path)

All of the typical `rails` or `ruby` env vars should be applicable as this image inherits from the base ruby image.

### Variable Management

The included `.env` file is intended to serve both the dev-local and docker use case:

#### with `dot-env`

This project is built with [`webpacker`](https://github.com/rails) Consult the [usage docs](https://github.com/rails/webpacker#usage) as needed.

#### with `docker`

Check the [Environment variables in Compose](https://docs.docker.com/compose/environment-variables/) from Docker.

## TODOs

* https://github.com/rails/webpacker/issues/1303
