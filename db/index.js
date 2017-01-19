
// the same environment variables used by postgres cli tools
var pg = require('pg');

var client = new pg.Client('postgres://localhost/twitterdb');


//ar postgresUrl = 'postgres://localhost/___YOUR_DB_NAME_HERE___';
//var client = new pg.Client(postgresUrl);

// connecting to the `postgres` server
client.connect();

// make the client available as a Node module
module.exports = client;



