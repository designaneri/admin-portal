import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-file-details',
  templateUrl: './file-details.component.html',
  styleUrls: ['./file-details.component.scss']
})
export class FileDetailsComponent implements OnInit {

  fileDetailById: any;
  pdfLink: any = 'src/assets/1130-boe.pdf';
  fileID: any;
  constructor(private dashboardService: DashboardService, private route: ActivatedRoute, private router: Router, protected _sanitizer: DomSanitizer) {
    this.fileID = this.route.snapshot.paramMap.get('id')
    this.dashboardService.getFileById(this.fileID).subscribe((fileDetails) => {
      
      this.fileDetailById = fileDetails.data
      // var url = this.fileDetailById.orginal_file + "&output=embed";
      // window.location.replace(url);
      // this.pdfLink = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.africau.edu/images/default/sample.pdf')
      // this.pdfLink= 'https://www.africau.edu/images/default/sample.pdf'
      this.pdfLink= this._sanitizer.bypassSecurityTrustResourceUrl('data:application/pdf;base64'+this.fileDetailById.orginal_file)
      // this.openPDF(this.fileDetailById.orginal_file)
    })
  }

  ngOnInit(): void {
  }
  openPDF(pdfUrl: any) {

    //   // Fetch the PDF and read the response as an `ArrayBuffer`.
    // const pdfResponse = await fetch(pdfUrl);
    // const documentBuffer = await  pdfResponse.arrayBuffer();
    //  return PSPDFKit.load({
    //     document: documentBuffer
    //   });
  }

  markApprove() {
    let details = {
      pdf_id: this.fileID,
      status: 'Reviewed'
    }
    this.dashboardService.reviewFiles(details).subscribe((details) => {
      this.router.navigate(['dashboard/all-file/'])
    })
  }
  markReject() {
    let details = {
      pdf_id: this.fileID,
      status: 'Rejected'
    }
    this.dashboardService.reviewFiles(details).subscribe((details) => {
      this.router.navigate(['dashboard/all-file/'])
    })
  }
}
