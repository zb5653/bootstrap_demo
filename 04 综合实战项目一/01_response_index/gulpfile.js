/**
 * gulp的主文件，用于注册任务
 * @Author: iceStone
 * @Date:   2016-01-26 17:07:26
 * @Last Modified by:   iceStone
 * @Last Modified time: 2016-01-26 17:56:34
 */

'use strict';

// 此处代码都是由NODE执行
// 载入Gulp模块
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('change', function() {
  // src/index.html
  gulp.src('*.html')
  .pipe(reload({
    stream: true
  }));
});

gulp.task('css', function() {
    gulp.src('css/*.css')
    .pipe(reload({
      stream: true
    }));
});

// Static server
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./" //指定所启动的静态文件服务器的跟目录
        }
    });
	gulp.watch('*.html', ['change']);
	gulp.watch('css/*.css',['css']);
});
