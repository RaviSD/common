# LibWorkspace

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

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


===================================================================

npm install ../example-ng6-lib/dist/example-ng6-lib/example-ng6-lib-0.0.1.tgz

npm install dist/foo/foo-0.0.1.tgz

npm install -g @angular/cli@6.1.1

npm i @angular/cli@8.2.0

npm install @schematics/angular@7.0.7 --save-dev

npm i @angular/cli@latest


---------------------------

ng new lib-workspace --create-application=false //6

ng new lib-workspace --createApplication=false //7

cd lib-workspace
ng generate library approver-library --prefix=gcrs // Library

ng generate application consumer-app // Craete consumer app

// Install Library. same workspace

npm install ../lib-workspace/dist/approver-library/approver-library-0.0.1.tgz

// Install Library. different project


cd angular7-project
npm install ../lib-workspace/dist/approver-library/approver-library-0.0.1.tgz


npm install @angular/cdk --save

npm install @angular/cdk@7.2.0 --save
npm uninstall @angular/cdk

npm i @angular/animations@7.2.0

npm i @angular/primeicons@1.0.0
npm i @angular/animations@7.2.0


npm install primeng@7.1.3 --save
npm install primeicons@1.0.0 --save

npm run package

cd angular7-project
npm install ../lib-workspace/dist/approver-library/approver-library-0.0.1.tgz
npm start

=============== P-CALENDAR --------------

https://html.developreference.com/article/10096062/primeNg+calendar+unable+to+disable+dates+from+an+array+or+highlight+current+Date

https://medium.com/5bayt/using-datepicker-range-in-angular-ced2fd0389da

https://github.com/primefaces/primeng/issues/7993

https://medium.com/@ng.gayathri/angular-extending-primeng-controls-41dcb52ae4fa
=============================
#PROJECT#

---Genrate component
ng g c approver-edit
ng g c approver-readonly

---Genrate module
ng g m core-module
ng g m shared-module

---- INstall Prime ng
npm install primeng --save// npm uninstall primeng
npm install primeicons --save// npm uninstall primeicons

npm install primeng@7.1.3 --save
npm install primeicons@1.0.0 --save
npm install @angular/animations --save


ng generate service shared-module/common/approver-service
ng generate service core-module/core-service/approver-service
