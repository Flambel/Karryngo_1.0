import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './shared/service/api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'karryngo';
  constructor(
    private router: Router,
    private api: ApiService
  ) {
    // this.router.navigate(['welcome']);
    // Get the app Token
    // this.api.getAppToken();
  }
}
