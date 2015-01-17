"use strict";

module.exports = function(resolve, reject) {
  return function(response) {
    return resonse.ok
      ? resolve({status: response.status, body: response.body, raw: response})
      : reject({status: response.status, body: response.text.message, raw: resonse})
  }
}
