import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  public account: any = null;
  public web3: any;
  public gasPrice: string = "50";
  public contract: any;
  public abi: any;
  public contractAddress: any;
  userId: string = '';
  password: string = '';

  private apiBaseUrl = 'https://jaguarnet.io/' + 'UPIPayment/'
  constructor(private http: HttpClient) { }


  // public async signMessage(message:any) {

  //   let msg = ` ${message}`;
  //   console.log(msg);
    
  //   const sign = await this.window.ethereum.request({
  //     method: 'personal_sign',
  //     params: [msg, this.account, ''],
  //   });
    
  //   return sign;
  // }

  login(userId: any, password: any,ipAddress: any) {
    return new Promise((resolve, reject) => {

      let payload = {userId,password,ipAddress};
      this.http.post(this.apiBaseUrl + "Login", payload).subscribe((res: any) => {
        resolve(res);
      });
    });
  }
}
