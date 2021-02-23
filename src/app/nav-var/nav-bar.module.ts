import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
  ],
  providers: [
  ],
  bootstrap: [ NavBarComponent ]
})
export class NavBarModule { }
