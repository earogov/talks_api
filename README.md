# talks_api

## Pre-reqs

Install [Node.js](https://nodejs.org/en/).

Install [Typescript](https://www.typescriptlang.org/).

You can install typescript globally:

	npm install typescript -g

In that case to compile project use scripts "gl:build" and "gl:watch" from package.json:

	npm run gl:build
    npm run gl:watch

Or you can use local compiler specified in "devDependences" of package.json.
To do so you need to [for Ubuntu Linux]:

-place you project folder in any subfolder of home directory.

-install project dependences (from project root):

	npm install
    
-create bin folder in home directory (if it doesn't exist):

	mkdir ~/bin

-copy tsc and tsserver files from [project root]/node_modules/typescript/bin to created folder.

-rename copies:

	tsc to talks:tsc
    tsserver to talks:tsserver

-replace line in talks:tsc:

	require('../lib/tsc.js') 
    
to  	

    require('../[path to project root]/node_modules/typescript/lib/tsc.js')

-replace line in talks:tsserver:

	require('../lib/tsserver.js') 
    
to  	

    require('../[path to project root]/node_modules/typescript/lib/tsserver.js')

Now you can use scripts "loc:build" and "loc:watch" from package.json:

	npm run loc:build
    npm run loc:watch


