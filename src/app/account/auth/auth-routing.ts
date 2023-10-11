import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Login2Component } from './login2/login2.component';

import { PasswordresetComponent } from './passwordreset/passwordreset.component';
import { Register2Component } from './register2/register2.component';
import { Recoverpwd2Component } from './recoverpwd2/recoverpwd2.component';
import { Verification2Component } from './verification2/verification2.component';
import { Steptwoverification2Component } from './steptwoverification2/steptwoverification2.component';
import { Confirmmail2Component } from './confirmmail2/confirmmail2.component';
import { ResetPassword2Component } from './reset-password-2/reset-password-2.component';

const routes: Routes = [
    {
        path: 'verificar-email',
        component: Verification2Component
    },
    {
        path: 'verificar-email-2',
        component: Steptwoverification2Component
    },
    {
        path: 'signup-2',
        component: Register2Component
    },
    {
        path: 'reset-password',
        component: Recoverpwd2Component
    },
    {
        path: 'reset-password-2',
        component: ResetPassword2Component
    },
    {
        path: 'login-2',
        component: Login2Component
    },
    {
        path: 'confirm-email-2',
        component: Confirmmail2Component
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
