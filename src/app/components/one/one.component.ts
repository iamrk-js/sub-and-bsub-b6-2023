import { Component, OnInit } from '@angular/core';
import { UsernameService } from 'src/app/service/username.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {
  username: string = ''
  constructor(private _usernameService: UsernameService) { }

  ngOnInit(): void {
    this._usernameService.userSubject$
      .subscribe(res => {
        this.username = res
      })
  }

}
