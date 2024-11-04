'use strict';

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _clientOverlayFalseReloadTrue = require('webpack-hot-middleware/client?overlay=false&reload=true');

var _clientOverlayFalseReloadTrue2 = _interopRequireDefault(_clientOverlayFalseReloadTrue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handlers = {
  reload: function reload(route) {
    if (route === '/_error') {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)((0, _keys2.default)(next.router.components)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var r = _step.value;
          var Component = next.router.components[r].Component;

          if (Component.__route === '/_error-debug') {
            // reload all '/_error-debug'
            // which are expected to be errors of '/_error' routes
            next.router.reload(r);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return;
    }

    next.router.reload(route);
  },
  change: function change(route) {
    var _ref = next.router.components[route] || {},
        Component = _ref.Component;

    if (Component && Component.__route === '/_error-debug') {
      // reload to recover from runtime errors
      next.router.reload(route);
    }
  }
}; /* global next */


_clientOverlayFalseReloadTrue2.default.subscribe(function (obj) {
  var fn = handlers[obj.action];
  if (fn) {
    var data = obj.data || [];
    fn.apply(undefined, (0, _toConsumableArray3.default)(data));
  } else {
    throw new Error('Unexpected action ' + obj.action);
  }
});