import request from '../lib/request'

export default function(url, opts) {
  return request('del', url, null, opts);
}