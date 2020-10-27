import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from '../components/login/login.component';
import { MenuComponent } from '../components/menu/menu.component';
import { UserEditComponent } from '../components/user-edit/user-edit.component';
import { UserListItemComponent } from '../components/user-list-item/user-list-item.component';
import { UserComponent } from '../components/user/user.component';
import { UserListComponent } from '../components/user-list/user-list.component';
import { DashboardComponent } from 'src/components/dashboard/dashboard.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MenuComponent,
    UserEditComponent,
    UserEditComponent,
    UserListItemComponent,
    UserComponent,
    UserListComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
