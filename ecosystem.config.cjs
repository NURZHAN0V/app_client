  module.exports = {
    apps : [{
      name: "client",
      script: "./.output/server/index.mjs",
      env_production: {
        NODE_ENV: "production",
      }
    }]
  }
