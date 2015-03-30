export default function(resolve, reject, parse=true) {
  return function(err, res) {
    if (err) return reject(err);
    if (!res.ok) return reject(res);

    let text = res.text;
    if (text && parse) text = JSON.parse(res.text);

    resolve(text);
  }
}
