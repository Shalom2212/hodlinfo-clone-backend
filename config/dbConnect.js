const { Client } = require('pg');
require('dotenv').config()

const conString = process.env.DATABASE_URI
const client = new Client({
    connectionString: conString
  });

module.exports = client
