import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { DashboardService } from '../services/dashboard.service';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AccordionConfig } from 'ngx-bootstrap/accordion';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


export function getAccordionConfig(): AccordionConfig {
  return Object.assign(new AccordionConfig(), { closeOthers: true });
}
// import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';

@Component({
  selector: 'app-dashboard-details',
  templateUrl: './dashboard-details.component.html',
  styleUrls: ['./dashboard-details.component.scss'],
  providers: [{ provide: AccordionConfig, useFactory: getAccordionConfig }]
})
export class DashboardDetailsComponent implements OnInit {

  dashboardDetails: any;
  userDetails: any;
  modalRef?: BsModalRef;
  bsMinDate = new Date(new Date().setFullYear(new Date().getFullYear() - 100));
  bsMaxDate = new Date(new Date().setFullYear(new Date().getFullYear()));
  selected: any;
  // public pieChart: GoogleChartInterface | any;

  constructor(
    private dashboardService: DashboardService,
    private appService: AuthService,
    private modalService: BsModalService) {
    this.userDetails = this.appService.getUserDetails();
    // this.dashboardService.getDashboardDetails().subscribe((details) => {
    //   console.log(details.data);
    //   this.dashboardDetails = details.data
    // })
  }
  @ViewChild('staticTabs', { static: false }) staticTabs?: TabsetComponent;

  selectTab(tabId: number) {
    if (this.staticTabs?.tabs[tabId]) {
      this.staticTabs.tabs[tabId].active = true;
    }
  }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,{
      class: 'modal-dialog-centered',
    });
  }

  ngOnInit(): void {
  }

  
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  // pie chart
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
      datalabels: {
        // formatter: (value, ctx) => {
        //   if (ctx.chart.data.labels) {
        //     return ctx.chart.data.labels[ctx.dataIndex];
        //   }
        // },
      },
    },
  };
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [ 'Documents Created', 'Templates Used', 'Documents Saved' ],
    datasets: [ {
      data: [ 300, 500, 100 ],
      backgroundColor: [
        '#693ABE',
        '#3AC2B9',
        '#F9BC0D'],
        datalabels: {
          color: '#ffffff'
        }
    } ]
  };
  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [ DatalabelsPlugin ];
  
  //  bar chart
  public barChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.4
      }
    },
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 0,
        ticks: {
          stepSize: 5
        }
      }
    },
    plugins: {
      legend: { display: true, position: 'bottom', },
    }
  };
  public barChartLabels: string[] = [ 'Documents Created', 'Templates Used', 'Documents Saved' ];
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: this.barChartLabels,
    datasets: [{
        label: 'Templates Overview',
        data: [20, 20, 15],
        backgroundColor: [
          '#693ABE',
          '#3AC2B9',
          '#F9BC0D'],
          borderColor: [
            '#693ABE',
            '#3AC2B9',
            '#F9BC0D']
      }
    ]
  };
}
