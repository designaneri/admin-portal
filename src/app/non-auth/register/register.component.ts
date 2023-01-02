import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: UntypedFormGroup;
  constructor(
    private appService: AuthService,
    private formBuilder: UntypedFormBuilder,
    private router:Router
  ) { 
    this.registerForm = this.formBuilder.group({
      email: [],
      password: [],
      confirmpassword:[],
      first_name:[],
      last_name:[]
    });
  }

  ngOnInit(): void {
  }

  submitData(){
    
    // this.appService.registerUser(this.registerForm.value).subscribe((res)=>{
    //   this.router.navigate(['/non-auth/login'])
    // })
  }
}
