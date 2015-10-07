# Depricated

You should use [jonjaques/sugar-xhr](https://github.com/jonjaques/sugar-xhr) instead

# oro-xhr

```
import { post } from 'oro-xhr'
let options =  { headers: { 'X-Foo': 'bar' } }

post('http://foobar.com', { foo: 'bar' }, opts).then(function(resp) {
	console.log(resp.body)
})
```

```
import get from 'oro-xhr/get'

get('http://google.com').then(function(resp) {
	console.log(resp.text)
})
```
