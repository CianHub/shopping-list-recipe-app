import { Component } from '@angular/core';

@Component({
  /* The tag that corresponds to this component in a HTML file, works like a CSS selector
  Due to this you can do it in other ways like as an attribute or class
  This can be handy for add a component when an element has a class */
  selector: 'app-root',
  templateUrl: './app.component.html', // The HTML code for this component
  styleUrls: ['./app.component.scss'] // The styles for the HTML template for this component
})
export class AppComponent {}
