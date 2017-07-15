export class BuildConfig {

  /*
   * Gulp tasks
   */
  public static GULP_TASKS_DIR: string = "tasks";
  public static GULP_TASKS: string = "build/gulp/" + BuildConfig.GULP_TASKS_DIR;

  /*
   * JavaScript files
   */
  public static BUILD_JS: string[] = [
    "build/**/*.js",
  ];
  public static APP_JS: string[] = [
    "dist/**/*.js"
  ];
  public static APP_TEST_JS: string[] = [
    "dist/**/*.spec.js"
  ];
  public static ALL_JS: string[] = BuildConfig.BUILD_JS
                                    .concat(BuildConfig.APP_JS)
                                    .concat(BuildConfig.APP_TEST_JS);

  /*
   * TypeScript files
   */
  public static BUILD_TYPESCRIPT: string[] = [
    "build/**/*.ts",
  ];
  public static APP_TYPESCRIPT: string[] = [
    "dist/**/*.ts"
  ];
  public static APP_TEST_TYPESCRIPT: string[] = [
    "dist/**/*.spec.ts"
  ];
  public static ALL_TYPESCRIPT: string[] = BuildConfig.BUILD_TYPESCRIPT
                                              .concat(BuildConfig.APP_TYPESCRIPT)
                                              .concat(BuildConfig.APP_TEST_TYPESCRIPT);

  /*
   * Node settings
   */
  public static NODE_SERVER: string = "dist/server/server.js";

  /*
   * Nodemon settings
   */
  public static CHANGE_DELAY: number = 1;     // seconds

  /*
   * BrowserSync settings
   */
  public static BROWSERSYNC_PORT: number = 8000;
  public static BROWSER_RELOAD_DELAY: number = 1000;  // ms
}