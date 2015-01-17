"use strict";

var Promise  = require("es6-promise").Promise;
var xhr      = require("superagent");
var response = require("./response");

module.exports = function(url, data) {
  return new Promise(function(resolve, reject) {
    var _xhr = xhr.post(url);
    if (data) _xhr.send(data);
    _xhr.end(function(response) {
      return response.ok ? resolve(response) : reject(response);
    });
  });
}
