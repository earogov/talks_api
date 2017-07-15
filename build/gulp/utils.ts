"use strict";

import * as events from "events";

const gulpUtil = require("gulp-util");

export class Utils {
  /**
   * Log a message or series of messages using chalk"s blue color.
   * Can pass in a string, object or array.
   *
   * @param message Message(s) to write to the log.
   */
  public static log(message: string | string[]): void {
    if (typeof (message) === "object") {
      for (const item in <string[]>message) {
        if (message.hasOwnProperty(item)) {
          gulpUtil.log(gulpUtil.colors.blue(message[item]));
        }
      }
    } else {
      gulpUtil.log(gulpUtil.colors.blue(message));
    }
  }
}