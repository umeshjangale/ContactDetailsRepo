import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './Components/contacts/contacts.component';
import { AuthComponent } from './Components/Auth/auth.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'accounts/contact', component: ContactsComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
