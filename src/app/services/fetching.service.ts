import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchingService {

  private _isFetching: BehaviorSubject<boolean> = new BehaviorSubject(false)
  public readonly isFetching: Observable<boolean> = this._isFetching.asObservable();

  constructor() { }

  changeIsFetching(value: boolean) {
    this._isFetching.next(value)
  }

  // getIsFetching(): Observable<any> {
  //   return this._isFetching.getValue();
  // }
}
