const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');
const task = require('./task');

const delay100ms = (timeout => (callback) => {
  if (timeout) clearTimeout(timeout);
  timeout = setTimeout(callback, 100); // eslint-disable-line no-param-reassign
})();

module.exports = task('build', ({ watch = false, onComplete } = {}) => new Promise((resolve) => {
  let ready = false;

  let watcher = chokidar.watch(['locales', 'build', 'package.json', 'yarn.lock']);
  watcher.on('all', (event, src) => {
    // Reload the app if package.json or yarn.lock files have changed (in watch mode)
    if (src === 'package.json' || src === 'yarn.lock') {
      if (ready && onComplete) delay100ms(onComplete);
      return;
    }
  });

  watcher.on('ready', () => {
    ready = true;
    if (onComplete) onComplete();
    if (!watch) watcher.close();
    resolve();
  });

  function cleanup() {
    if (watcher) {
      watcher.close();
      watcher = null;
    }
  }

  process.on('SIGINT', cleanup);
  process.on('SIGTERM', cleanup);
  process.on('exit', cleanup);
}));