import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

declare const FB: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   userID = '';
  userName = '';
  constructor( private route: ActivatedRoute, private router: Router) {
    (window as any).fbAsyncInit = () => {
      FB.init({
        appId: '226824298664756',
        cookie: true,
        xfbml: true,
        version: 'v6.0'
      });
      FB.AppEvents.logPageView();
    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  ngOnInit(): void {
    
  }

  checkLoginFBStatus(){
    FB.getLoginStatus((res) => {
      console.log(res.status);
    });
  }
  signInWithFacebook() {
    //FB.logout();
    //this.checkLoginFBStatus();
    FB.login((response) => {
      console.log('submitLogin', response);
      if (response.authResponse) {
        this.userID = response.authResponse.userID;
        this.getInformationFB();
        //login success
        //login success code here
        //redirect to home page
      }
      else {
        console.log('User login failed');
      }
    });
  }

  getInformationFB(){
    FB.api('/me', (response) => {
      console.log(response);
      this.userName = response.name;
      this.writeLoginInfo();
    });
    this.router.navigate(['/video-list']);
  }

  writeLoginInfo(){
    const user = {
      userName: this.userName,
      userId: this.userID

    };
    sessionStorage.setItem('user', JSON.stringify(user));
  }
  signInWithGoogle() {
  }

}
