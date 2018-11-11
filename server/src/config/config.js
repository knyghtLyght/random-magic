// Config file for server side protected variables
module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'randommagic',
    user: process.env.DB_USER || 'randommagic',
    password: process.env.DB_PASS || 'randommagic',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.DB_HOST || 'sqlite',
      storage: './randommagic.sqlite'
    }
  }
}
