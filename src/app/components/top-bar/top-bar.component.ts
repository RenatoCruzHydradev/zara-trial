import { Component, OnDestroy } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FetchingService } from 'src/app/services/fetching.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnDestroy {
  isNavigating: boolean = false;
  fetchingSubscription: Subscription;

  constructor(
    private fetchingService: FetchingService
  ) {
    this.detectFetching();
  }

  private detectFetching() {
    this.fetchingSubscription = this.fetchingService.isFetching.subscribe(
      (result) => {
        this.isNavigating = result;
      }
    );
  }

  ngOnDestroy(): void {
    this.fetchingSubscription?.unsubscribe();
  }
}
