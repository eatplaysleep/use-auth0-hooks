module.exports = {
  env: {
    // API_BASE_URL: 'https://tv-shows-api.now.sh',
    API_BASE_URL: 'https://use-auth0-hooks-example.vercel.app',
    // API_BASE_URL: 'http://locahost:3000',
    AUTH0_DOMAIN: 'identity-dev.mgmresorts.com/oauth2/ausk4d0yoLYEONwH04x6/v1',
    ISSUER: 'identity-dev.mgmresorts.com/oauth2/ausk4d0yoLYEONwH04x6',
    AUTH0_CLIENT_ID: 'mgm_app_web',
    REDIRECT_URI: 'https://use-auth0-hooks-example.vercel.app',
    // REDIRECT_URI: 'http://localhost:3000',
    // POST_LOGOUT_REDIRECT_URI: 'http://localhost:3000'
    POST_LOGOUT_REDIRECT_URI: 'https://use-auth0-hooks-example.vercel.app'
  }
}
