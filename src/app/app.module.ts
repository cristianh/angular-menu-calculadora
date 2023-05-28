import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [BrowserModule, RouterModule, FormsModule],
  declarations: [AppComponent, NavbarComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
