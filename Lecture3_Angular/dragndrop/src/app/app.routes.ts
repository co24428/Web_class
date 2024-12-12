import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { TasksComponent } from './components/tasks/tasks.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'header', component: HeaderComponent},
    { path: 'tasks', component: TasksComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];