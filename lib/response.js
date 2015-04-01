import assign from 'object-assign'

export default function(resolve, reject, opts) {
  return function(err, res) {
    if (err) return reject(err);
    if (!res.ok) return reject(res);
    resolve(res);
  }
}
