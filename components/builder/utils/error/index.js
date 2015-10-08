'use strict';

module.exports = function(id, cfg) {

  var logger = require('@flickmy/bic-logger').get(id);

  return cfg.$.plumber({
    errorHandler: function (err) {

      logger.error(err);

      this.emit('end');
    }
  });
};
