import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-verification2',
  templateUrl: './verification2.component.html',
  styleUrls: ['./verification2.component.scss']
})
export class Verification2Component implements OnInit {

  public emailGett: string;
  constructor(private route: ActivatedRoute, private router: Router ) { }
  // set the currenr year
  year: number = new Date().getFullYear();
  ngOnInit(): void {
    this.emailGett = this.route.snapshot.queryParams['emailGet'] || 'exemplo@email.com';
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

  verificarEmail()
  {
    this.router.navigate(['/account/verificar-email-2'], { queryParams: { emailGet: this.emailGett } });
  }
}
