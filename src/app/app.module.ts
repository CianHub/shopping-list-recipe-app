import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent, SignupComponent, SigninComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    AppRoutingModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
