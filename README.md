# mime-validator
Validate whether content follow specific MIME type

Can be used as standalone tool, or as Express middleware. Currently, only support validation on following MIME types:

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

To use mime-validator as Express middleware:
```js
var express = require('express');
var mimeValidator = require('mime-validator');

var app = express();
app.use(mimeValidator.middleware);
```

If HTTP request body does not follow its MIME type in the `Content-Type` header, a `400 Bad Request` error will be returned to client.

## License
(The MIT License)

Copyright (c) 2016 Chuan Shao &lt;shaochuancs@gmail.com&gt;