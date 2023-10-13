import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { UIModule } from '../../shared/ui/ui.module';
import { Login2Component } from './login2/login2.component';
import { Register2Component } from './register2/register2.component';
import { Recoverpwd2Component } from './recoverpwd2/recoverpwd2.component';

import { AuthRoutingModule } from './auth-routing';
import { PasswordresetComponent } from './passwordreset/passwordreset.component';
import { Verification2Component } from './verification2/verification2.component';
import { Steptwoverification2Component } from './steptwoverification2/steptwoverification2.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { ResetPassword2Component } from './reset-password-2/reset-password-2.component';

@NgModule({
  declarations: [ Steptwoverification2Component, ResetPassword2Component, Verification2Component, Login2Component, PasswordresetComponent, Register2Component, Recoverpwd2Component],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbAlertModule,
    UIModule,
    AuthRoutingModule,
    CarouselModule,
    NgOtpInputModule
  ]
})
export class AuthModule { }
