var getHTML = require('../http-functions.js')

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function lowercase (html) {
  console.log(html.toLowerCase())
}

getHTML(requestOptions,lowercase)