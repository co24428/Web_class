import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SideNavListComponent } from './components/side-nav-list/side-nav-list.component';

@NgModule({
    declarations: [
      AppComponent,
      HeaderComponent,
      HomeComponent,
      SideNavListComponent,
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MaterialModule, // Import material module.
      // Now all components can use material.
    ],
    exports: [],
    providers: [],
    bootstrap: [AppComponent],
  })
  export class AppModule {}