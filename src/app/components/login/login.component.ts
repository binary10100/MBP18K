// login.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  companyLogo = 'path/to/your/company/logo.png';
  userId: string = '';
  password: string = '';
  showPassword: boolean = false;

  constructor(private router: Router) {}

  btnLogin_Click() {
    // Implement the logic to handle the button click
    console.log('Button clicked!');
    // Add your login logic here
  }

  redirectToWebsite() {
    
  }
  
}
