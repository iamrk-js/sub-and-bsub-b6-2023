import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsernameService {
  // userSubject : Subject<string> = new Subject<string>();
  userSubject : BehaviorSubject<string> = new BehaviorSubject<string>("Jhon");
  userSubject$ = this.userSubject.asObservable()
  constructor() { }
}
