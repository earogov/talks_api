"use strict";

import * as fs from "fs";
import * as gulp from "gulp";
import {BuildConfig} from "./config";
import {GulpTasks} from "./gulp";


// load all gulp tasks
fs.readdirSync(BuildConfig.GULP_TASKS)
  // filter out anything that's not a *.js file
  .filter((filename: any) => {
    return filename.match(/\.js$/i);
  })
  // convert to an array of objects
  .map((filename: string) => {
    // return array of gulp tasks from file
    return <GulpTasks>require("./" + BuildConfig.GULP_TASKS_DIR + "/" + filename);
  })
  // for each array of tasks...
  .forEach((tasks: GulpTasks) => {
    // use gulp-help to register the task
    tasks.forEach( (task) => { gulp.task(task) });
  });