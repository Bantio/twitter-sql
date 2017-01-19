var pg = require('pg');

// instantiate a new client
// the client will read connection information from
// the same environment variables used by postgres cli tools
var client = new pg.Client('postgres://localhost/twitterdb');

// connect to our database
client.connect(function (err) {
  if (err) throw err;

  // execute a query on our database
  client.query('SELECT * FROM tweets', function (err, result) {
    if (err) throw err;

    // just print the result to the console
    console.log(result.rows); // outputs: { name: 'brianc' }

    // disconnect the client
    client.end(function (err) {
      if (err) throw err;
    });
  });
});
