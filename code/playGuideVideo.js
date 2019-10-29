var http = require('http');
var console = require('console');
var secret = require('secret');
var fail = require('fail');

module.exports.function = function playGuideVideo () {
  const options = {
    format : "json",
    cacheTime: 0
  };

//  const url = secret.get('api.url');
  const url = 'http://localhost:8080'
  try {    
    const response = http.getUrl(url + "/property/guideVideoUrl", options);
  } catch(e) {
    console.log(response);
    throw fail.checkedError('There is no process', 'NotFoundGuideVideo', null);
  }

  console.log(response); 
  console.log("vnd.youtube:" + response); 

  return response;
}
