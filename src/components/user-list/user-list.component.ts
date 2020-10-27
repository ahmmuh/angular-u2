import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  @Input() users: Object[];
  // boolean till false för att visa den första och tänkta färgen i början sedan till true om man klicka på toggle knappen
  textColor = false;

  constructor() {}

  ngOnInit(): void {}

  //metod för att toggle color på users list

  toggleColor() {
    this.textColor = !this.textColor;
  }
}
