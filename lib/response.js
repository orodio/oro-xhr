export default function(resolve, reject, parse=true) {
  return function(res) {
    if (!res.ok) return reject(res);

    let text = res.text;
    if (text && parse) text = JSON.parse(res.text);

    resolve(text);
  }
}
