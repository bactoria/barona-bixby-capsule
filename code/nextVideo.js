var http = require('http')
var console = require('console')
var fail = require('fail')
var secret = require('secret');

module.exports.function = function nextVideo ($vivContext, next) {
  const options = {
    query : {
      userId : $vivContext.bixbyUserId
    },
    format : "json",
    cacheTime: 0
  };

  const url = secret.get('api.url');

  try {    
   const response = http.getUrl(url + "/nextVideo", options);
  } catch(e) {
    console.log(response);
    throw fail.checkedError('There is no process', 'NotFoundNextVideo', null);
  }
  return response;
}
