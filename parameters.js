
var https = require('https');

function getAndPrintHTML (options) {

  https.get(options,function (response) {

  response.setEncoding('utf8');

  response.on('data', function (data) {
    var htmlChunk = '';
    htmlChunk += data
    console.log(htmlChunk);
  });

});

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);