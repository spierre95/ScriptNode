var getHTML = require('../http-functions.js')

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function uppercase (html) {
 var reverseString = html.split("").reverse().join("")
 console.log(reverseString);
}

getHTML(requestOptions,uppercase)