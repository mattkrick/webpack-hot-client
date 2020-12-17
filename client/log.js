"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var levels = ['trace', 'debug', 'info', 'warn', 'error', 'silent'];

var Log =
/*#__PURE__*/
function () {
  function Log() {
    _classCallCheck(this, Log);

    this.level = 'error';
  }

  _createClass(Log, [{
    key: "group",
    value: function group() {
      var _console;

      (_console = console).group.apply(_console, arguments);
    }
  }, {
    key: "groupCollapsed",
    value: function groupCollapsed() {
      var _console2;

      (_console2 = console).groupCollapsed.apply(_console2, arguments);
    }
  }, {
    key: "groupEnd",
    value: function groupEnd() {
      var _console3;

      (_console3 = console).groupEnd.apply(_console3, arguments);
    }
  }, {
    key: "trace",
    value: function trace() {
      var _console4;

      if (levels.indexOf(this.level) > levels.indexOf('trace')) return;

      (_console4 = console).trace.apply(_console4, arguments);
    }
  }, {
    key: "info",
    value: function info() {
      var _console5;

      if (levels.indexOf(this.level) > levels.indexOf('info')) return;

      (_console5 = console).info.apply(_console5, arguments);
    }
  }, {
    key: "warn",
    value: function warn() {
      var _console6;

      if (levels.indexOf(this.level) > levels.indexOf('warn')) return;

      (_console6 = console).warn.apply(_console6, arguments);
    }
  }, {
    key: "error",
    value: function error() {
      var _console7;

      if (levels.indexOf(this.level) > levels.indexOf('error')) return;

      (_console7 = console).error.apply(_console7, arguments);
    }
  }]);

  return Log;
}();

var log = new Log();
module.exports = log;