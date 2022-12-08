import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pdf-viewer';
  url=""
  displayPdf(){
     this.url="https://www.africau.edu/images/default/sample.pdf"
  }

  displayPpt(){
    this.url="https://scholar.harvard.edu/files/torman_personal/files/samplepptx.pptx"
 }
 displayDoc(){
  this.url="https://calibre-ebook.com/downloads/demos/demo.docx"
}
}
