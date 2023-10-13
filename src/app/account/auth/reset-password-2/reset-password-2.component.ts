import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { OwlOptions } from 'ngx-owl-carousel-o';
import { AuthenticationService } from '../../../core/services/auth.service';
import { environment } from '../../../../environments/environment';
import { first } from 'rxjs/operators';
import { UserProfileService } from '../../../core/services/user.service';
import { UserService } from 'src/app/services/user.service';
import { Criar } from 'src/app/models/user/request/criar.model';
import Swal from 'sweetalert2';
import { ResponseCriar } from 'src/app/models/user/response/response.criar.model';
import { ResetarSenha } from 'src/app/models/user/request/resetar-senha.model';

@Component({
  selector: 'app-reset-password-2',
  templateUrl: './reset-password-2.component.html',
  styleUrls: ['./reset-password-2.component.scss']
})
export class ResetPassword2Component implements OnInit {
  emailGet: string;
  resetCodeGet: string;
  signupForm: FormGroup;
  submitted = false;
  error = '';
  successmsg = false;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private userService: UserService) { }
  // set the currenr year
  year: number = new Date().getFullYear();

  ngOnInit(): void {
    document.body.classList.add('auth-body-bg')
    this.emailGet = this.route.snapshot.queryParams['emailGet'] || 'exemplo@email.com';
    this.resetCodeGet = this.route.snapshot.queryParams['resetCodeGet'] || '';
    this.signupForm = this.formBuilder.group({
      name: [this.resetCodeGet, Validators.required],
      email: [this.emailGet, [Validators.required, Validators.email]],
      senha: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.signupForm.controls; }

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

  /**
   * On submit form
   */
  onSubmit() {
    this.submitted = true;
    this.error = '';

    // stop here if form is invalid
    if (this.signupForm.invalid) {
      return;
    } 

    this.userService.resetarSenha(new ResetarSenha(this.signupForm.controls['email'].value, this.signupForm.controls['name'].value,  this.signupForm.controls['senha'].value)).subscribe((res: ResponseCriar) => {
      // if (res.isSuccess == false) {
      //   Swal.fire('', res.message, 'error');
      //         return;
      // }
      this.successmsg = true;
      this.timeToVerify(this.signupForm.controls['email'].value);
    },
      (error => {
        this.error = error ? error : '';
      }));
    
  }

  timeToVerify(url: string)
  {
    setTimeout(() => { this.router.navigate(['/account/login-2'], { queryParams: { emailGet: url } }) }, 1500);
  }
}
