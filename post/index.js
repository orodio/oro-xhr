import { Promise } from "es6-promise"
import xhr         from "superagent"
import response    from "../lib/response"

export default function(url, data, parse=true) {
  return new Promise(function(resolve, reject) {
    let _xhr = xhr.post(url);

    if (data) _xhr.send(data);

    _xhr.end(response(resolve, reject, parse));
  });
}

