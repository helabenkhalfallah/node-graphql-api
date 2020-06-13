//dot env configuration
var dotenv = require('dotenv')
dotenv.config()

//launch server after loading env var
require('./server/server.js')