import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
// import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';
import { AnalysisService } from './analysis.service';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss'],
  providers: [DatePipe]
})
export class AnalysisComponent implements OnInit {

  // public columnChart: GoogleChartInterface | any;
  // public pieChart: GoogleChartInterface | any;
  // public pieChart2: GoogleChartInterface | any;
  public status: string = 'today'
  analysisDetails: any;
  isDocument: boolean = true
  isValidation: boolean = true

  constructor(private analysisService: AnalysisService, private datePipe: DatePipe) {
    this.getGraphDetails()
  }

  ngOnInit(): void { }

  changeDetails(data: any) {
    this.status = data.target.value
    this.getGraphDetails()
  }

  changeDocumentDetails(data: any) {
    this.status = data
    this.getGraphDetails()
  }

  getGraphDetails() {

    let data = {
      data_as: this.status
    }
    // this.columnChart = null
    this.analysisService.getAnalysisDetails(data).subscribe((response) => {
      this.analysisDetails = response.data
      this.getValidationGraph()
      this.getDocumentGraph()
      this.getDOcumentCountGraph()
    })
  }

  getDOcumentCountGraph() {
    let documentGraphData: any[] = [];
    if (this.status === 'today') {
      documentGraphData.push(['Time', 'In_queue', 'Processing', 'Success'])
      this.analysisDetails.document_count.forEach((element: any) => {
        documentGraphData.push([this.datePipe.transform(new Date(element.date), 'MMM d y h:mm a'), element.in_queue, element.processing, element.success]);
      });
    } else if (this.status === 'weekly') {
      documentGraphData.push(['Month', 'In_queue', 'Processing', 'Success'])
      this.analysisDetails.document_count.forEach((element: any) => {
        documentGraphData.push([this.datePipe.transform(new Date(element.date), 'MMM d y'), element.in_queue, element.processing, element.success]);
      });
    }

    // dataTable: [
    //   ['Month', 'In_queue', 'Processing', 'Success'],
    //   ['15-Sep', 0, 0, 3],
    //   ['16-Sep', 0, 0, 4],
    //   ['20-Sep', 0, 0, 0],
    // ],
    // this.columnChart = {
    //   chartType: GoogleChartType.ColumnChart,
    //   dataTable: documentGraphData,
    //   options: {
    //     allowHtml: true,
    //     allowCollapse: true,
    //     legend: {
    //       position: 'bottom',
    //       labels: {
    //         fontSize: 10
    //       }
    //     },
    //     height: 500,
    //     colors: ['#4d9ecd', '#ffbe4f', '#00b59f', '#ff624b']
    //   },
    // };
  }

  getValidationGraph() {
    if (this.analysisDetails?.validation_data.not_opened === 0 && this.analysisDetails?.validation_data.pending_validation === 0 && this.analysisDetails?.validation_data.success_validation === 0) {
      this.isValidation = false
    }

    // this.pieChart2 = {
    //   chartType: GoogleChartType.PieChart,
    //   dataTable: [
    //     ['Task', 'Hours per Day'],
    //     ['not_opened', this.analysisDetails?.validation_data.not_opened],
    //     ['pending_validation', this.analysisDetails?.validation_data.pending_validation],
    //     ['success_validation', this.analysisDetails?.validation_data.success_validation],
    //   ],
    //   options: {
    //     allowHtml: true,
    //     allowCollapse: true,
    //     legend: {
    //       position: 'bottom',
    //       labels: {
    //         fontSize: 10
    //       }
    //     },
    //     height: 500,
    //     colors: ['#434348', '#ffbe4f', '#63b7ec']
    //   }
    // };
  }

  getDocumentGraph() {
    if (this.analysisDetails?.processing_data === 0 && this.analysisDetails?.success_data === 0 && this.analysisDetails?.in_queue === 0) {
      this.isDocument = false
    }

    // this.pieChart = {
    //   chartType: GoogleChartType.PieChart,
    //   dataTable: [
    //     ['Task', 'Hours per Day'],
    //     ['processing_data', this.analysisDetails?.processing_data],
    //     ['success_data', this.analysisDetails?.success_data],
    //     ['in_queue', this.analysisDetails?.in_queue],
    //   ],
    //   options: {
    //     allowHtml: true,
    //     allowCollapse: true,
    //     legend: {
    //       position: 'bottom',
    //       labels: {
    //         fontSize: 10
    //       }
    //     },
    //     height: 500,
    //     colors: ['#ffbe4f', '#63b7ec', '#4d9ecd']
    //   }
    // };
  }
}
