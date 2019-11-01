var console = require('console')

module.exports.function = function execution (appType) {
  var appType = String(appType);
  
  let result = {
    executionName: appType
  }

  if(appType == "실행") {
    result.executionUri = "barona://app_start";
  } else if(appType == "종료") {
    result.executionUri = "barona://app_end";
  }

  return result;
}
