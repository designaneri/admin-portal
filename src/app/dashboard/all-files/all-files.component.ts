import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-all-files',
  templateUrl: './all-files.component.html',
  styleUrls: ['./all-files.component.scss']
})
export class AllFilesComponent implements OnInit {
  allFileDetails: any;
  perPage: number = 10;
  total: number = 0;
  totalPages: number = 0;
  page: any;
  totalRecord:number=0;
  constructor(
    private dashboardService: DashboardService,
    private appService: AuthService) {
    this.page = 1
    this.getAllFile()
  }
  ngOnInit(): void {

  }
  getAllFile() {
    let pageDetails = {
      page: this.page,
      limit: this.perPage
    }
    this.dashboardService.getAllFile(pageDetails).subscribe((details) => {
      this.allFileDetails = details.data.data
      this.totalRecord=details.data.total_record
      this.totalPages = Math.ceil(details.data.total_record / this.perPage)
    })
  }

  deleteFile(id: any) {
    this.dashboardService.deleteFile(id).subscribe((rs) => {
      this.getAllFile()
    })
  }

  openFile(data: any) {
    window.open(data, "_blank");
  }

  downloadFile(downloadFileDetails: any) {
    window.open(downloadFileDetails.csv_file, "_blank");
  }

  reloadData() {
    this.getAllFile()
  }

  previousPage() {
    if (this.page !== 1 && this.page > 1) {
      this.page = this.page - 1
    }
    this.getAllFile()
  }

  nextPage() {
    if (this.totalPages !== this.page && this.page < this.totalPages) {
      this.page = this.page + 1
    }
    this.getAllFile()
  }

}
