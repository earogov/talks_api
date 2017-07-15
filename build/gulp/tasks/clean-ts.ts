"use strict";

import * as gulp from "gulp";
import * as yargs from "yargs";
// import * as gulpIf from "gulp-if";
import {BuildConfig} from "../config";
import {GulpTasks} from "../gulp";
import {Utils} from "../utils";

// const gulpPrint = require("gulp-print");
const gulpRimraf = require("gulp-rimraf");
const args = yargs.argv;

const gulpTasks: GulpTasks = [];

let cleanBuild = <gulp.TaskFunction>function(done) {
  Utils.log("Removing generated app JavaScript files from source tree");
  gulp.src(BuildConfig.BUILD_JS, {read: false})
      // .pipe(gulpIf(args.print, gulpPrint()))
      .pipe(gulpRimraf());
  done();
};
cleanBuild.displayName = "clean-build-ts";
cleanBuild.description = "Removes all generated JavaScript from TypeScript used in the build";
gulpTasks.push(cleanBuild);

let cleanApp = <gulp.TaskFunction>function(done) {
  Utils.log("Removing generated app JavaScript files from source tree");
  gulp.src(BuildConfig.APP_JS, {read: false})
      // .pipe(gulpIf(args.print, gulpPrint()))
      .pipe(gulpRimraf());
  done();
};
cleanApp.displayName = "clean-app-ts";
cleanApp.description = "Removes all generated JavaScript from TypeScript used in the app";
gulpTasks.push(cleanApp);

export = gulpTasks;