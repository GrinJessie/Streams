var https = require('https');
var options = {
  host: 'stream-large-file.herokuapp.com',
  path: '/give-me-stuff-now'
};

//called by https when the request is made.
var callback = function(response) {
  console.log('In response handler callback!');

  response.on('data', function(chunk){
    console.log('[-- chunk of length' + chunk.length + ' --]');
    console.log(chunk.toString());
  })
}

console.log('I am about to make the request!');

https.request(options, callback).end();

console.log('I have made the request!');
