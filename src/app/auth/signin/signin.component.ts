import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}
  onSignIn(form: NgForm) {
    const email = form.value.email;
    const password = form.value.email;
    this.authService.signinUser(email, password);
  }
}
