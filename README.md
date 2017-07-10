# Starter project for Pdfmake with Angular 4 and Angular CLI
This is Starter Project for Pdfmake with Angular 4 and Angular CLI

PDFMAKE:-  pdfmake is awesome light weight pure Javascript pdf generator https://github.com/bpampuch/pdfmake

In this starter project i have integrated PDFMAKE in Angular 4 + Angular CLI without adding js file in the `Index.html` or `scripts` array 

## Intergartion.
1. First Generate angular project using CLI.

1. `npm install pdfmake --save `

1. add your imports in the Component 
```
 import * as pdfMake from 'pdfmake/build/pdfmake';
 import * as pdfFonts from 'pdfmake/build/vfs_fonts';
```
 1. add this line in the constructor of your component
 ```
 pdfMake.vfs = pdfFonts.pdfMake.vfs;
```
## Sample component 

 ``` import { Component } from '@angular/core';
 import * as pdfMake from 'pdfmake/build/pdfmake';
 import * as pdfFonts from 'pdfmake/build/vfs_fonts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
constructor(){
     //called first time before the ngOnInit()
     pdfMake.vfs = pdfFonts.pdfMake.vfs;
      var dd = { content: 'your pdf data' };
    pdfMake.createPdf(dd).download();
  }

}
```
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
