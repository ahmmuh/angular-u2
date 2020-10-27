import { Component, OnInit } from '@angular/core';
import { AdminLogin } from '../../models/admin-login.model';
import { AuthService } from 'src/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  model: AdminLogin = new AdminLogin('', '');
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  checkIfUserLoggedIn() {
    return this.authService.checkIfUserLoggedIn();
  }

  login() {
    this.authService.login(this.model);
  }
  logout() {
    this.authService.logout();
  }
}
