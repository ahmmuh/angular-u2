import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from 'src/components/dashboard/dashboard.component';
import { MenuComponent } from 'src/components/menu/menu.component';
import { LoginComponent } from 'src/components/login/login.component';
import { UserComponent } from 'src/components/user/user.component';
import { UserListComponent } from 'src/components/user-list/user-list.component';
import { UserListItemComponent } from 'src/components/user-list-item/user-list-item.component';
import { UserEditComponent } from 'src/components/user-edit/user-edit.component';
import { NotFoundComponent } from 'src/components/not-found/not-found.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'menu', component: MenuComponent },
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'user-list-item', component: UserListItemComponent },
  { path: 'edit-user', component: UserEditComponent },
  { path: 'user/:id', component: UserComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
