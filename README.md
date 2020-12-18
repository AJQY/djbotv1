[![Build Status](https://travis-ci.org/AaronBuxbaum/RealTimeTradeGame.svg)](https://travis-ci.org/AaronBuxbaum/RealTimeTradeGame)
[![Dependency Status](https://david-dm.org/AaronBuxbaum/RealTimeTradeGame.svg)](https://david-dm.org/AaronBuxbaum/RealTimeTradeGame#info=dependencies)
[![Coverage Status](https://coveralls.io/repos/AaronBuxbaum/RealTimeTradeGame/badge.svg?branch=master&service=github)](https://coveralls.io/github/AaronBuxbaum/RealTimeTradeGame?branch=master)

### To build
1. Clone git repo
2. Run `npm install`. You may need to install `npm` from npmjs.com.
3. Build and deploy with `gulp deploy`. You may need to install `gulp` by running `npm install --global gulp`.

#### Visual Studio Code
If you are using [Visual Studio Code](https://code.visualstudio.com/), you will want to get Intellisense typings for all of the libraries that are in use.

1. Install the TypeScript Definition manager by running `npm install --global tsd`.
2. Build the `typings` directory by running `gulp install-tsd`.
3. To add new typings, run `tsd query <typing1> <typing2> <typingN> --action install --save`.

#### Updating dependencies
1. Install `npm-check-updates`: `npm install --global npm-check-updates`.
2. Check for new dependencies: `ncu`.
3. If there are new dependencies, update with: `ncu -u`. 
  - Note that this could break some things in the system! This just keeps dependencies up-to-date.


### Running server
1. Build the server with `gulp build` if it has not already been built. Several files should now be within a directory named `build`.
2. Start the NodeJS ser