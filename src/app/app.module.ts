import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/index';
import { UsersComponent, UserFormComponent } from './users/index';
import { UserService } from './shared/users-service';
// MATERIAL DESIGN MODULES
import { MaterialModule } from '@angular/material';

import { APP_ROUTES } from './app.routes';
import { NavbarComponent } from './navbar/navbar.component';
import { PostsComponent } from './posts/posts.component';
import { PreventUnsavedChangesGuard } from './prevent-unsaved-changes-guard.service';
import { TestAngularMaterialComponent } from './test-angular-material/test-angular-material.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    UsersComponent,
    UserFormComponent,
    PostsComponent,
    TestAngularMaterialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    MaterialModule.forRoot(),
    APP_ROUTES
  ],
  providers: [UserService, PreventUnsavedChangesGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
