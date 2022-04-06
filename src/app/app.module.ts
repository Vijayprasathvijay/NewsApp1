import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import { AppRoutingModule } from './app-routing.module';

const routes:Routes=[
  {path:'user-reg' , component : UserRegComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    UserRegComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent,UserRegComponent]
})
export class AppModule { }
