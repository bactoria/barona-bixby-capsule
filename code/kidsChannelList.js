var http = require('http')
var console = require('console')
var fail = require('fail')
var secret = require('secret');

module.exports.function = function kidsChannelList (prefix) {

  const options = {
    format : "json",
    cacheTime: 0
  };


  const url = secret.get('api.url');
  const response = http.getUrl(url + "/kidsChannels", options);

  console.log(response)

  return response
}
