var http = require('http');
var console = require('console');
var secret = require('secret');
var fail = require('fail');

module.exports.function = function playGuideVideo () {
  const options = {
    format : "json",
    cacheTime: 0
  };

  const url = secret.get('api.url');

  try {    
    const response = http.getUrl(url + "/property/guideVideoUrl", options);
  } catch(e) {
    console.log(e);
    throw fail.checkedError('There is no process', 'NotFoundGuideVideo', null);
  }

  console.log(response);
  const videoId = response.videoId;

  const payloadUri = "vnd.youtube:" + videoId; 

  return payloadUri;
}
