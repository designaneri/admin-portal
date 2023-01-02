import { Component, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public showText: boolean;
  public loginForm: UntypedFormGroup;
  submitted = false;

  constructor(
    private router: Router,
    private appService: AuthService,
    private formBuilder: UntypedFormBuilder,) {
    this.showText = false;
    this.loginForm = this.formBuilder.group({
      email: new UntypedFormControl(null, [Validators.required, Validators.email]),
      password: [null, [Validators.required]]
    });
  }
  showPasswordToggle() {
    this.showText = !this.showText;
  }

  ngOnInit(): void {
  }
  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }
  loginByAuth() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.appService.loginUser(this.loginForm.value).subscribe((data: any) => {
      this.appService.setUserDetails(data);
      this.router.navigate(['/dashboard']);
    }, (error: any) => {
    })
  }

}
