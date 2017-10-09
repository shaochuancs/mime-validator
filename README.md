# mime-validator
Validate whether content follow specific MIME type

Can be used as standalone tool. Currently, only support validation on following MIME types:

* `application/json`
* `application/x-www-form-urlencoded`

## Installation
```sh
$ npm install mime-validator
```

## Usage
To validate content `c` on MIME type `t`:
```js
var mimeValidator = require('mime-validator');

var t = 'application/json'; // example MIME type
var c = '{"a":42, "b":"test"}'; // example content
mimeValidator.validate(t, c); // return true
```

## License
(The MIT License)

Copyright (c) 2016 Chuan Shao &lt;shaochuancs@gmail.com&gt;