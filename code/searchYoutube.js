var http = require('http');
var console = require('console');
var secret = require('secret');
var fail = require('fail');

module.exports.function = function searchYoutube ($vivContext, searchData, searchYoutubeKeyword) {
  const options = {
    query : {
      userId : $vivContext.bixbyUserId,
      searchData : searchData
    },
    format : "json",
    cacheTime: 0
  };

  const url = secret.get('api.uri');

  try {    
    const response = http.getUrl(url + "/search", options);
  } catch(e) {
    console.log(response);
    throw fail.checkedError('There is no process', 'NotFoundVideos', null);
  }

  if (searchData) {    
    response.searchData = searchData;
  }
  
  return response;
}
