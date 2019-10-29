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

//  const url = secret.get('api.url');
  const url = 'http://localhost:8080'

  try {    
   const nextResult = http.getUrl(url + "/nextVideo", options);
  } catch(e) {
    console.log(e);
    throw fail.checkedError('There is no process', 'NotFoundNextVideo', null);
  }
  console.log(nextResult)
  return nextResult;
}