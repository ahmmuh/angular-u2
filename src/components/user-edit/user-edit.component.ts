import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent implements OnInit {
  @Output() addEvent = new EventEmitter();
  @Output() removeEvent = new EventEmitter();
  user: string;
  constructor() {}

  ngOnInit(): void {}

  addUser(e): void {
    // här skickar jag addUser metod med hjälp av output med eventemitter men också skicka in data från input(html)
    if (this.user !== '') {
      this.addEvent.emit(this.user);
    }
  }

  removeUser(e) {
    this.removeEvent.emit(this.user);
  }
}
