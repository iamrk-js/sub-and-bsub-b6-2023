import { Component } from '@angular/core';
import { UsernameService } from './service/username.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sub';
  constructor(private _usernameService : UsernameService){

  }
  addUser(username:string){
    this._usernameService.userSubject.next(username)
  }
}
