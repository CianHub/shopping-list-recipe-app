import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Angular Material Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material Module
import { AngularMaterialModule } from './angular-material/angular-material.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AngularMaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
