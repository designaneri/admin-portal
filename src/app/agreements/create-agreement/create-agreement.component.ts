import { Component, OnInit,TemplateRef,ChangeDetectorRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-create-agreement',
  templateUrl: './create-agreement.component.html',
  styleUrls: ['./create-agreement.component.scss']
})
export class CreateAgreementComponent implements OnInit {
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService,private changeDetection: ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  changeStatus(event:Event,template: TemplateRef<any>){
    const isChecked = (<HTMLInputElement>event.target).checked;
      if(isChecked){
        this.modalRef = this.modalService.show(template,{
          class: 'modal-dialog-centered modal-sm',
        });
    }
  }
  hideModal(){
    this.modalService.hide();
    let checkbox = document.getElementById(
      'option1',
    ) as HTMLInputElement | null;
    if (checkbox != null) {
      checkbox.checked = false;
    }
  }
}
