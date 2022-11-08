import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor( private tokenStorage: TokenStorageService,private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.router.navigateByUrl('/home');
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    if(username=='admin'&&password=='abcd1234'){      
        this.tokenStorage.saveToken('token');
        this.tokenStorage.saveUser({username:'Gopik'});
        this.isLoginFailed = false;
        this.isLoggedIn = true;                
        this.reloadPage();
      }
      else{        
        this.isLoginFailed = true;
      }    
  }

  reloadPage(): void {
    window.location.reload();
  }
}
