import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewflatComponent } from './components/flats/newflat/newflat.component';
import { MyflatsComponent } from './components/flats/myflats/myflats.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'flats/newflat', component: NewflatComponent},
    { path: 'flats/myflats', component: MyflatsComponent},
];
