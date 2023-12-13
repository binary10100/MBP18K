// login.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  companyLogo = 'path/to/your/company/logo.png';
  userId: string = '';
  password: string = '';
  showPassword: boolean = false;
  account: any = '';
  _subscription: any;
  
  constructor(
    private router: Router,
    private api: AuthService,
    private spinnerService: NgxSpinnerService    
    ) 
    {
      this.getLoginDetails();
    }

    ngOnInit(): void {}
    async getLoginDetails(){

      // this.account= await this.

    }

  async btnLogin_Click() {
    // Implement the logic to handle the button click
    console.log('Button clicked!');
    // this.spinnerService.show();
    // let signature = await this.signMessage(
    //   'Do you want to login?'
    // );
    
    // var res: any = await this.api.login(this.userId, this.password,);
    //   //console.log(x);
    //   if (res.status) {
    //     sessionStorage.setItem('address', this.account);
    //     sessionStorage.setItem('token', res.data);

    //     this.spinnerService.hide();
    //     this.router.navigate(['user/dashboard']);
    //   } else {
    //     this.spinnerService.hide();
    //     Swal.fire(res.message, '', 'error');
    //   }

  }

  redirectToWebsite() {
    
  }

}