Rails.application.config.session_store :redis_store, servers: {
  host: ENV.fetch('REDIS_HOST', 'localhost'),
  port: ENV.fetch('REDIS_PORT', '6379'),
  db: 0,
  namespace: 'cwds_session'
}, expires_in: 4.hours
