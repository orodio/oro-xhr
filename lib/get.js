"use strict";

var Promise  = require("es6-promise").Promise;
var xhr      = require("superagent");
var response = require("./response");

module.exports = function(url, data) {
  return new Promise(function(resolve, reject) {
    var _xhr = xhr.get(url);

    if (data) _xhr.data(data);

    _xhr.end(response);
  });
}
