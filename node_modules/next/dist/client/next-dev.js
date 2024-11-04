'use strict';

require('react-hot-loader/patch');

var _next = require('./next');

var next = _interopRequireWildcard(_next);

var _evalScript = require('../lib/eval-script');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

window.next = next;
module.exports = _evalScript.requireModule;