import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from
'@angular/material/progress-spinner';
import { DragDropModule } from '@angular/cdk/drag-drop';
// MatNativeDateModule,,,
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule, MatListModule, MatMenuModule, MatTabsModule,
    MatCardModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, DragDropModule, FormsModule, ReactiveFormsModule, 
    // BrowserAnimationsModule
  ],
  exports: [
    CommonModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule, MatListModule, MatMenuModule, MatTabsModule,
    MatCardModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, DragDropModule, FormsModule, ReactiveFormsModule, 
    // BrowserAnimationsModule
  ]
})
export class MaterialModule { }
