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
2. Start the NodeJS server with `gulp`.
  - Note that if port `8000` is not opened, you must define the environment variable `process.env.PORT` to an open port.
3. The application should now be running locally. Point your favorite browser to `localhost:8000` to access it.


### Testing
Both unit tests and end-to-end tests can be run with `gulp test`.

#### Unit tests
RealTimeTradeGame uses [Karma](http://karma-runner.github.io/) for unit tests. You can test the application by running `gulp unit-tests`.

#### End-to-end tests
RealTimeTradeGame uses [Protractor](http://angular.github.io/protractor) for end-to-end tests. You can run those tests with `gulp e2e-tests`.


### Contributing
If you wish to contribute, keep the following in mind:

1. Write Karma unit tests for any new functionality.
2. If applicable, write Protractor end-to-end tests for visual additions.
3. Run the tests (`gulp test`) such that they all pass.
4. Check the coverage report. Test coverage should _not_ be less than the master branch.
5. Submit a pull request to the GitHub repository.
