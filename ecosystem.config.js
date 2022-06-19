module.exports = {
  apps : [
    {
      name: 'diving',
      script: './server.js',
      exec_mode: 'cluster',
      instances: 3,
      watch: true,
      increment_var: 'PORT',
      env: {
        PORT: 3007,
        NODE_ENV: 'development'
      },
    }
  ]
};
