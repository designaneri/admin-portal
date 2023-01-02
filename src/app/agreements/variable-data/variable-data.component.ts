import { Component, OnInit, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { of } from 'rxjs';
import { NgWizardConfig, NgWizardService, StepChangedArgs, StepValidationArgs, STEP_STATE, THEME, TOOLBAR_BUTTON_POSITION } from 'ng-wizard';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { AccordionConfig } from 'ngx-bootstrap/accordion';
export function getAccordionConfig(): AccordionConfig {
  return Object.assign(new AccordionConfig(), { closeOthers: true });
}
import { Router } from '@angular/router';

@Component({
  selector: 'app-variable-data',
  templateUrl: './variable-data.component.html',
  styleUrls: ['./variable-data.component.scss'],
  providers: [{ provide: AccordionConfig, useFactory: getAccordionConfig }]
})

export class VariableDataComponent implements OnInit {
  fileName: string = "";
  bsMinDate = new Date(new Date().setFullYear(new Date().getFullYear() - 100));
  bsMaxDate = new Date(new Date().setFullYear(new Date().getFullYear()));
  visible:boolean = false;
  manualEntry:boolean = false;
  stepIndex: number = 0;
  isNewSigner: boolean = false;
  isMaharashtraStamp: boolean = false;
  isStampState: boolean = true;
  selectedSignatureTypes = 'Aadhar Sign';
  signatureTypes = [
    { id: 1, name: 'Aadhar Sign' },
    { id: 2, name: 'DSC sign' },
  ];
  selectedStampState = 'Tamil Nadu';
  stampState=[
    {id: 1, name:'Tamil Nadu'},
    {id: 2, name:'Karnataka'},
    {id: 3, name:'Gujarat'},
    {id: 4, name:'Delhi'},
    {id: 5, name:'Maharashtra'}
  ];
  isNewUTCLSigner: boolean = false;

  stepStates = {
    normal: STEP_STATE.normal,
    disabled: STEP_STATE.disabled,
    error: STEP_STATE.error,
    hidden: STEP_STATE.hidden
  };
 
  config: NgWizardConfig = {
    selected: 0,
    theme: THEME.arrows,
    toolbarSettings: {
      toolbarButtonPosition: TOOLBAR_BUTTON_POSITION.start,
      toolbarExtraButtons: [
        { text: 'Submit', class: "btn btn-primary wizard-finish-btn disabled" , event: () => { this.router.navigateByUrl('/agreements'); } }
      ],
    }
  };
 
  constructor(private ngWizardService: NgWizardService,private router: Router) {
  }
 
  ngOnInit() {
  }
 
  showPreviousStep(event?: Event) {
    this.ngWizardService.previous();
  }
 
  showNextStep(event?: Event) {
    this.ngWizardService.next();
  }
 
  resetWizard(event?: Event) {
    this.ngWizardService.reset();
  }
 
  setTheme(theme: THEME) {
    this.ngWizardService.theme(theme);
  }
  
  stepChanged(args: StepChangedArgs) {
    let finishBtn = document.getElementsByClassName('wizard-finish-btn')[0];
    let wizardBtnToolbar = document.getElementsByClassName('ng-wizard-toolbar')[0];
    this.stepIndex = args.step.index;
    if(this.stepIndex === 2){
      finishBtn.classList.remove('disabled');
      wizardBtnToolbar.classList.add('finishAdded');
    }else{
      finishBtn.classList.add('disabled');
      wizardBtnToolbar.classList.remove('finishAdded');
    }
    window.scroll({ 
          top: 0, 
          left: 0, 
          behavior: 'smooth' 
    });
  }
 
  isValidTypeBoolean: boolean = true;
 
  isValidFunctionReturnsBoolean(args: StepValidationArgs) {
    return true;
  }
 
  isValidFunctionReturnsObservable(args: StepValidationArgs) {
    return of(true);
  }


  onFileChange(event: any) {
    this.fileName = event.target.files[0].name;
  }

  addGroupItem(event: any){
    this.visible = true;
  }
  addManualEntry(event:any){
    this.manualEntry = true;
  }
  addSigner(event:any){
    this.isNewSigner = true;
  }
  addUTCLSigner(event:any){
    this.isNewUTCLSigner = true;
  }
  onStampStateChange(event:any){
    console.log("CHANGE EVENT DATA:", event.name);
    if(event.name === "Maharashtra"){
      this.isMaharashtraStamp = true;
      this.isStampState = false;
    }else{
      this.isMaharashtraStamp = false;
      this.isStampState = true;
    }
  }
   
}