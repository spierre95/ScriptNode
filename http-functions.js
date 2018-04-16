var https = require('https');

module.exports = function getHTML (options, callback) {

  https.get(options,function (response) {

  response.setEncoding('utf8');

  response.setEncoding('utf8');

  response.on('data', function (data) {
    var htmlChunk = '';
    htmlChunk += data
    callback(data);
  });
});
}