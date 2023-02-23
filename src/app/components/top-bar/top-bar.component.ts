import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {

  isNavigating: boolean = false;

  constructor(private router: Router) {
    this.detectUrlChanges()
  }

  private detectUrlChanges() {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationStart) {
        this.isNavigating = val.url !== '/'
    }
    })
  }

}
