"use strict";

var Promise  = require("es6-promise").Promise;
var xhr      = require("superagent");
var response = require("./response");

module.exports = function(url, data) {
  console.warn("You should use oro-xhr/get instead of oro-xhr/lib/get to [GET] %s", url);
  return new Promise(function(resolve, reject) {
    var _xhr = xhr.get(url);
    if (data) _xhr.data(data);
    _xhr.end(function(response) {
      return response.ok ? resolve(response) : reject(response);
    });
  });
}
