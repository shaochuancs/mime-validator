/**
 * Created by cshao on 09/10/2017.
 */

'use strict';

function validateJSON(content) {
  try {
    JSON.parse(content);
    return true;
  } catch(e) {
    return false;
  }
}

function validateFormEncoded(content) {
  var fields = content.split('&');
  for (var i=0; i<fields.length; i++) {
    var kv = fields[i].split('=');
    if (kv.length < 2) {
      return false;
    }
  }
  return true;
}

function validateMIME(mime, content) {
  switch (mime) {
    case 'application/json':
      return validateJSON(content);
      break;
    case 'application/x-www-form-urlencoded':
      return validateFormEncoded(content);
      break;
    default:
      throw TypeError('Unsupported MIME type');
  }
}

exports.validate = validateMIME;