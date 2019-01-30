# Business-Registration-Application

A MEAN stack application(MongoDb, Express JS, Angular 7, Node JS). Performs CRUD task to register businesses.

## Running it on a local machine

Clone the repo and run `npm install` to install node modules and/or `npm install --dev` to install devDependencies. Then run `node server` or `nodemon server` to start the server.

Then move in to the client folder and run the following commands one after the other
`rm -rf node_modules dist tmp`
`npm install --save-dev angular-cli@latest`
`npm install`
`ng init`

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## bugs
AJAx not working. One has to reload the home page to see the changes. To be fixed soon

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
