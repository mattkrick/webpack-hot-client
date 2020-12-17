const levels = ['trace', 'debug', 'info', 'warn', 'error', 'silent'];
class Log {
  constructor() {
    this.level = 'error';
  }

  group(...args) {
    console.group(...args);
  }
  groupCollapsed(...args) {
    console.groupCollapsed(...args);
  }
  groupEnd(...args) {
    console.groupEnd(...args);
  }
  trace(...args) {
    if (levels.indexOf(this.level) > levels.indexOf('trace')) return;
    console.trace(...args);
  }
  debug(...args) {
    if (levels.indexOf(this.level) > levels.indexOf('debug')) return;
    console.debug(...args);
  }
  info(...args) {
    if (levels.indexOf(this.level) > levels.indexOf('info')) return;
    console.info(...args);
  }
  warn(...args) {
    if (levels.indexOf(this.level) > levels.indexOf('warn')) return;
    console.warn(...args);
  }
  error(...args) {
    if (levels.indexOf(this.level) > levels.indexOf('error')) return;
    console.error(...args);
  }
}
const log = new Log();

module.exports = log;
