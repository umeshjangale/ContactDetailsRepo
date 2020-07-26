import { Component, OnInit, Input, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Globals } from 'src/app/Globals/Globals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

@NgModule({
  schemas: [NO_ERRORS_SCHEMA]
})

export class HomeComponent implements OnInit {

  private globals: Globals;
  constructor(private router: Router) {

  }

  ngOnInit() {
    if (!this.globals.isAuthenticated) {
      this.router.navigate(['']);
    }
  }

}
