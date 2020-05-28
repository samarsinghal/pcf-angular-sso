# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
# pcf-angular-sso


## script

npm install -g @angular/cli
ng new my-app
cd my-app/
ng generate component login
npm install angular-oauth2-oidc --save
ng serve
ng build
ng serve --open


## pcf

https://p-identity.system.stonington.stream/dashboard/

Create new plan or use system one. 

## Apps manager

Services
- create new SSO service instance
- select system or custom plan.
- Select Manage on service instance
- Register a new app. 
    - create name
    - select type (eg. Auth Code)
    - Set the redirect url eg. http://localhost:4200
    - Select the permissions
    - Save the App ID & App Secret
    - Select Credentials to get the SSO Service URL

- Configure values in app/sso.config.ts



- 




