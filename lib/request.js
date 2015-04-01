import { Promise } from 'es6-promise'
import http from 'superagent'
import response from './response'

export default function(method, url, data, opts) {
  return new Promise(function(resolve, reject) {
    let xhr = http[method](url);
    if (data) xhr.send(data);
    if (opts && opts.headers) xhr.set(opts.headers)
    xhr.end(response(resolve, reject, opts));
  });
}