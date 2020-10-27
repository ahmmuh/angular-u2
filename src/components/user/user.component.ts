import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user: Object;
  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private authService: AuthService
  ) {}

  // hämta specifik user med hjälp av id
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.getUser(params.id);
    });
  }
  // metod för specifik user
  getUser(id) {
    this.usersService.getUser(id).subscribe((user) => (this.user = user));
  }
}
