import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


export const routes: Routes = [
    { path: '', component: LoginComponent }, // default
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: '**', component: PageNotFoundComponent } //unknown path
];