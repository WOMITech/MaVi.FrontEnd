import { Component, OnInit,ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Verificar } from 'src/app/models/user/request/verificar.model';
import { ResponseVerificar } from 'src/app/models/user/response/response.verificar.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-steptwoverification2',
  templateUrl: './steptwoverification2.component.html',
  styleUrls: ['./steptwoverification2.component.scss']
})
export class Steptwoverification2Component implements OnInit {

  @ViewChild('ngOtpInput') ngOtpInputRef:any;
  otp: string;
  emailGet:string;
  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }
  // set the currenr year
  year: number = new Date().getFullYear();
  ngOnInit(): void {
    this.emailGet = this.route.snapshot.queryParams['emailGet'] || 'seu e-mail';
  }
  config = {
    letterCase: "Upper",
    allowNumbersOnly: false,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      'width': '45px',
      'height': '45px'
    }
  };
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


  onOtpChange(otp) {

    this.otp = otp
    if (otp.length === 6) {

      this.otp.toUpperCase();

      }

    }

  verificarEmail(){
    this.userService.verificar(new Verificar(this.emailGet, this.otp)).subscribe((res: ResponseVerificar) => {
      this.router.navigate(['/account/confirm-email-2'], { queryParams: { emailGet: this.emailGet }});
    },
      (error => {
        
      }));
  }
}
