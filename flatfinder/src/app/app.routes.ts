import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NewflatComponent } from './components/flats/newflat/newflat.component';
import { MyflatsComponent } from './components/flats/myflats/myflats.component';
import { AllusersComponent } from './components/allusers/allusers.component';

import { AuthGuard } from './auth.guard';
import { AdminGuard } from './admin.guard';

export const routes: Routes = [
    // { path: '', component: HomeComponent },
    { path: '', component: LoginComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent },
    { path: 'flats/newflat', component: NewflatComponent, canActivate: [AuthGuard]},
    { path: 'flats/myflats', component: MyflatsComponent, canActivate: [AuthGuard]},
    { path: 'allusers', component: AllusersComponent, canActivate: [AdminGuard]},
];
