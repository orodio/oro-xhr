import request from '../lib/request'

export default function(url, data, opts) {
  return request('put', url, data, opts)
}