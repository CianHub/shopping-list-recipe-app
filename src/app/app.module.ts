import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Angular Material Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material Module
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';

import { AppComponent } from './app.component';

@NgModule({
  // A module is used to bundle components together
  // NgModule decorator marks the class as a module for the compiler
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
