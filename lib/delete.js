"use strict";

var Promise  = require("es6-promise").Promise;
var xhr      = require("superagent");
var response = require("./response");

module.exports = function(url, data) {
  console.warn("You should use oro-xhr/delete instead of oro-xhr/lib/delete to [DELETE] %s", url);
  return new Promise(function(resolve, reject) {
    var _xhr = xhr.del(url);
    if (data) _xhr.send(data);
    _xhr.end(function(response) {
      return response.ok ? resolve(response) : reject(response);
    });
  });
}
