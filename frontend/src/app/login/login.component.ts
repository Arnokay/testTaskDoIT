import { Component, OnInit } from '@angular/core';
import { AuthService, TOKEN_NAME } from '../auth.service'
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router) {

    this.visible = localStorage.getItem(TOKEN_NAME) == null;
  }

  visible: boolean;
  errorMessage: string;

  loginUser(e) {
    e.preventDefault();
    const username = e.target.elements[0].value;
    const password = e.target.elements[1].value;
    this.auth.login(username, password).then(
      jwt => {
        this.auth.setToken(jwt);
        this.visible = localStorage.getItem(TOKEN_NAME) == null;
        this.router.navigate(['/map']);
      },
      err => {
          this.errorMessage = 'Incorrect login or password';
          console.log(err);
      }
    )
  }

  logoutUser() {
    this.auth.delToken();
    this.visible = localStorage.getItem(TOKEN_NAME) == null;
  }

  ngOnInit() {
  }

}
