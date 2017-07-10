import { Component } from '@angular/core';
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
      var dd = { content: 'This is an sample PDF printed with pdfMake' };
    pdfMake.createPdf(dd).download();
  }
    
}
