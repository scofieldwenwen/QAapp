import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab-more',
  templateUrl: 'tab-more.page.html',
  styleUrls: ['tab-more.page.scss']
})

export class TabMorePage {

  constructor(public router: Router) {

  }

  goLoginPage() {
    this.router.navigateByUrl('/login');
  }
}
