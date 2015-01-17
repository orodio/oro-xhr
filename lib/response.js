"use strict";

module.exports = function(resolve, reject) {
  return function(response) {
    return resonse.ok ? resolve(response) : reject(response)
  }
}
