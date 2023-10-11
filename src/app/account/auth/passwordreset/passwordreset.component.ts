import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '../../../core/services/auth.service';
import { environment } from '../../../../environments/environment';
import { Email } from 'src/app/models/user/request/email.model';
import { UserService } from 'src/app/services/user.service';
import { ResponseVerificar } from 'src/app/models/user/response/response.verificar.model';

@Component({
  selector: 'app-passwordreset',
  templateUrl: './passwordreset.component.html',
  styleUrls: ['./passwordreset.component.scss']
})

/**
 * Reset-password component
 */
export class PasswordresetComponent implements OnInit, AfterViewInit {

  resetForm: FormGroup;
  submitted = false;
  error = '';
  success = '';
  loading = false;

  // set the currenr year
  year: number = new Date().getFullYear();

  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit() {

    this.resetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngAfterViewInit() {
  }

  // convenience getter for easy access to form fields
  get f() { return this.resetForm.controls; }

  /**
   * On submit form
   */
  onSubmit() {
    this.success = '';
    this.submitted = true;


    // stop here if form is invalid
    if (this.resetForm.invalid) {
      return;
    }

    this.userService.enviarCodigoResetSenha(new Email(this.f.email.value)).subscribe((res: ResponseVerificar) => {
      if (res.isSuccess) {
        this.router.navigate(['confirm-email-3'])
      }
    },
      (error => {
        this.error = error ? error : '';
      }));
  }
}
