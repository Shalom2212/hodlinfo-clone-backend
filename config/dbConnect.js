const pg = require('pg');
require('dotenv').config()
//or native libpq bindings
//var pg = require('pg').native

const conString = process.env.DATABASE_URI
const client = new pg.Client(conString);

module.exports = client
