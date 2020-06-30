const Instagram = require('instagram-web-api')
var CONFIG = require('./config.json');
var username = CONFIG.user
var password = CONFIG.password

const client = new Instagram({ username, password })
 
client
  .login()
  .then(() => {
    client
      .getProfile()
      .then(console.log)
  })
