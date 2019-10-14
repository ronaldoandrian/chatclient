import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css']
})
export class RegisterComponent implements OnInit {
  error_login;
  registerForm;
  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      username: '',
      mail: '',
      password: '',
      confirm_password: ''
    });
  }
  onSubmit(registerData) {
    if(FormContainsEmptyValue(registerData)) {
      var error_div = document.getElementById('error_div');
      if(error_div) error_div.setAttribute("style", "display: block;");
      this.error_login = "Tous les champs sont obligatoire!"; 
    }
    if(!PasswordIsEquals(registerData)) {
      var error_div = document.getElementById('error_div');
      if(error_div) error_div.setAttribute("style", "display: block;");
      this.error_login = "Les deux mots de passe ne sont pas cohérents!"; 
    }
    else {
      var error_div = document.getElementById('error_div');
      if(error_div) error_div.setAttribute("style", "display: none;");
      this.registerForm.reset();
    }
  }
  ngOnInit() {
    var error_div = document.getElementById('error_div');
    if(error_div) error_div.setAttribute("style", "display: none;");
  }

}

function FormContainsEmptyValue(registerData) {
  var d = registerData;
  return d.username === "" || d.password === "" || d.username === null || d.password === null || d.mail === "" || d.mail === null || d.confirm_password === "" || d.confirm_password === null;
}

function PasswordIsEquals(registerData) {
  return registerData.password === registerData.confirm_password;
}