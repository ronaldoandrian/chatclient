import { Component, OnInit  } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;
  error_login;
  display;
  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }
  onSubmit(loginData) {
    if(loginData.username === "" || loginData.password === "" || loginData.username === null || loginData.password === null) {
      var error_div = document.getElementById('error_div');
      if(error_div) error_div.setAttribute("style", "display: block;");
      this.error_login = "Tous les champs sont obligatoire!"; 
    }
    else {
      var error_div = document.getElementById('error_div');
      if(error_div) error_div.setAttribute("style", "display: none;");
      this.error_login = "";
      this.loginForm.reset();
    }
  }
  ngOnInit() { 
    var error_div = document.getElementById('error_div');
    if(error_div) error_div.setAttribute("style", "display: none;");
   }

}
