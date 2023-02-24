import { Component, OnDestroy } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnDestroy {
  isNavigating: boolean = false;
  routerSubscription: Subscription;

  constructor(private router: Router) {
    this.detectUrlChanges();
  }

  private detectUrlChanges() {
    this.routerSubscription = this.router.events.subscribe((val) => {
      if (val instanceof NavigationStart) {
        this.isNavigating = val.url !== '/';
      }
    });
  }

  ngOnDestroy(): void {
    this.routerSubscription?.unsubscribe();
  }
}
