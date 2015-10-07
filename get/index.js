import request from '../lib/request'

export default function(url, opts) {
  return request('get', url, null, opts);
}