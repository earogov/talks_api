# talks_api

## Pre-reqs

Install [Node.js](https://nodejs.org/en/).
Install [yarn](https://yarnpkg.com) package manager.

Install project dependencies (from project root):

	yarn install

Now [Typescript](https://www.typescriptlang.org/) and [Tslint](https://palantir.github.io/tslint/) are installed as development dependencies.
Compile build tools:

	npm run build:tools

[gulp](http://www.gulpjs.com) build system was also installed as development dependency.
Install globally [gulp-cli](https://www.npmjs.com/package/gulp-cli) to run local gulp version in terminal:

	sudo yarn global add gulp-cli

Run "build" or "watch" scripts to compile application:

	npm run build:app
	npm run watch:app

Install [Docker](https://www.docker.com/) and [Docker Compose](https://www.docker.com/compose/overview).