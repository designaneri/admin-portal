import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilesService } from '../services/files.service';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  files: any[] = [];
  isValid = true
  constructor(private filesService: FilesService, private router: Router) {

  }
  ngOnInit(): void {

  }

  /**
   * on file drop handler
   */
  onFileDropped($event: any) {
    this.prepareFilesList($event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(files: any) {
    this.prepareFilesList(files.target.files);
  }

  prepareFilesList(files: Array<any>) {
    let size = 0;
    if (files.length > 25) {
      this.isValid = false
      return
    } else {
      this.isValid = true
      for (const item of files) {
        // size += item.size;
        let check: any = (item.size / 1024 / 1024).toFixed(2);
        if (check < 5) {
          this.files.push(item);
        } else {
          this.isValid = false
          return
        }
      }
    }
  }

  uploadData() {
    this.filesService.uploadFile(this.files).subscribe((res) => {
      this.router.navigate(['/dashboard/all-file'])
    })
  }

  howfileLooks() {
    const pdfUrl = 'assets/boe-summary.pdf';
    const pdfName = 'Below_of_Entry_template';
    FileSaver.saveAs(pdfUrl, pdfName);
  }

  removeCurrentFile(index: any) {
    this.files.splice(index, 1);
  }
}
