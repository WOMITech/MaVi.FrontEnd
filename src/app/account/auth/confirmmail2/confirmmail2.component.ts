import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-confirmmail2',
  templateUrl: './confirmmail2.component.html',
  styleUrls: ['./confirmmail2.component.scss']
})
export class Confirmmail2Component implements OnInit {

  constructor(private router: Router) { }
  // set the currenr year
  year: number = new Date().getFullYear();
  ngOnInit(): void {
  }

  irParaLogin()
  {
    this.router.navigate(['/account/login-2'])
  }

}
