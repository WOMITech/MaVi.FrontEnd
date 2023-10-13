import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '../../../core/services/auth.service';
import { environment } from '../../../../environments/environment';
import { UserService } from 'src/app/services/user.service';
import { Email } from 'src/app/models/user/request/email.model';
import { ResponseVerificar } from 'src/app/models/user/response/response.verificar.model';

@Component({
  selector: 'app-recoverpwd2',
  templateUrl: './recoverpwd2.component.html',
  styleUrls: ['./recoverpwd2.component.scss']
})
export class Recoverpwd2Component implements OnInit {
   // set the currenr year
   year: number = new Date().getFullYear();

   resetForm: FormGroup;
   submitted = false;
   error = '';
   success = '';
   loading = false;
   successmsg = false;

   constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.resetForm.controls; }

  /**
   * On submit form
   */
  onSubmit() {
    this.success = '';
    this.submitted = true;

    console.log('this.f.email.value');
    console.log(this.f.email.value);
    // stop here if form is invalid
    if (this.resetForm.invalid) {
      return;
    }
    this.userService.enviarCodigoResetSenha(new Email(this.f.email.value)).subscribe((res: ResponseVerificar) => {
      console.log(res)
      this.successmsg = true;
      this.timeToReset(this.f.email.value);
    },
      (error => {
        this.error = error ? error : '';
      }));
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

  timeToReset(url: string)
  {
    setTimeout(() => { this.router.navigate(['/account/reset-password-2'], { queryParams: { emailGet: url } }); }, 1500);
  }
}
