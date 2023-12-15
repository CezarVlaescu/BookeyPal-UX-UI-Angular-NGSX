import { Injectable } from '@angular/core';
import { Router, NavigationEnd, Event as RouterEvent } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginDetectorService {

  private showHeaderAndFooter = new BehaviorSubject<boolean>(true); // create a Subject an set the state
  showHeaderAndFooter$ = this.showHeaderAndFooter.asObservable(); // create an Observable that subscribe to the Subject

  constructor(private router : Router) {
    this.router.events.pipe(
      filter((event : RouterEvent): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.showHeaderAndFooter.next(!['/login', '/register'].includes(event.urlAfterRedirects));
    });
  }
}
