import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"
  documents: Document[] = [
    {
      title: "my First doc",
      description: "my desc",
      file_url: "http://google.com",
      updated_at: "oct 3, 1994",
      image_url: "http.//google.com"
    },
    {
      title: "my First doc",
      description: "my desc",
      file_url: "http://google.com",
      updated_at: "oct 3, 1994",
      image_url: "http.//google.com"
    },
    {
      title: "my First doc",
      description: "my desc",
      file_url: "http://google.com",
      updated_at: "oct 3, 1994",
      image_url: "http.//google.com"
    }
  ]  
}