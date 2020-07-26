import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './Components/contacts/contacts.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './Components/Auth/auth.component';
import { HomeComponent } from './Components/home/home.component';
import { Globals } from './Globals/Globals';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AuthComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
