import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  data: any;
  userList: Object[] = [];
  constructor(private auth: AuthService, private userService: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  checkIfUserLoggedIn() {
    return this.auth.checkIfUserLoggedIn();
  }
  //get alla users
  getUsers() {
    this.userService.getUsers().subscribe((users) => {
      this.userList = users;
      console.log(this.userList);
    });
  }

  // //lägga till användaren til array med hjälp av push metod
  addUser(user: string) {
    this.data.push(user);
  }

  //remove user

  removeUser() {
    this.userList.pop();
  }
}
