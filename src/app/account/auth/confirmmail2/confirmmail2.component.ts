import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-confirmmail2',
  templateUrl: './confirmmail2.component.html',
  styleUrls: ['./confirmmail2.component.scss']
})
export class Confirmmail2Component implements OnInit {
  emailGet:String;
  constructor(private router: Router, private route: ActivatedRoute) { }
  // set the currenr year
  year: number = new Date().getFullYear();
  ngOnInit(): void {
    this.emailGet = this.route.snapshot.queryParams['emailGet'] || '';
  }

  irParaLogin()
  {
    this.router.navigate(['/account/login-2'], { queryParams: { emailGet: this.emailGet } })
  }

}
