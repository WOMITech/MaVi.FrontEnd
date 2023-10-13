import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../../../core/services/auth.service';
import { AuthfakeauthenticationService } from '../../../core/services/authfake.service';

import { OwlOptions } from 'ngx-owl-carousel-o';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { UserService } from 'src/app/services/user.service';
import { Autenticar } from 'src/app/models/user/request/autenticar.model';
import { ResponseAutenticar } from 'src/app/models/user/response/response.autenticar.model';
import { Security } from 'src/app/utils/security.util';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss']
})
/**
 * Login-2 component
 */
export class Login2Component implements OnInit {

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private userService: UserService) { }
  loginForm: FormGroup;
  submitted = false;
  error = '';
  returnUrl: string;

  // set the currenr year
  year: number = new Date().getFullYear();

  ngOnInit(): void {
    document.body.classList.add('auth-body-bg')
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });

    // reset login status
    // this.authenticationService.logout();
    // get return url from route parameters or default to '/'
    // tslint:disable-next-line: no-string-literal
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    if(Security.hasToken() && !Security.hasExpiredToken()){
      this.router.navigate([this.returnUrl]);
    }
  }

  carouselOption: OwlOptions = {
    items: 1,
    loop: false,
    margin: 0,
    nav: false,
    dots: true,
    responsive: {
      680: {
        items: 1
      },
    }
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  /**
   * Form submit
   */
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    } 
      
    this.userService.autenticar(new Autenticar(this.f.email.value, this.f.password.value)).subscribe((res: ResponseAutenticar) => {
      if (res.isSuccess == false) {
        Swal.fire('', res.message, 'error');
              return;
      }
      this.setUser(res);
    },
      (error => {
        this.error = error ? error : '';
      }));
  }

  setUser(res:ResponseAutenticar) {
    Security.set(res.data);
    if(this.returnUrl){
      this.router.navigate([this.returnUrl]);
    } else{
      this.router.navigate(['/dashboard']);
    }
  }
}
