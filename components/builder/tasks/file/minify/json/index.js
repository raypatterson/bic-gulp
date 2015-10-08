'use strict';

module.exports = function(id, cfg) {

  cfg.gulp.task(id, function() {

    var taskConfig = cfg.tasks[id];

    return cfg.gulp.src(taskConfig.src, {
        cwd: taskConfig.cwd
      })
      .pipe(cfg.$.jsonmin(taskConfig.options))
      .pipe(cfg.gulp.dest(taskConfig.dest));
  });
};