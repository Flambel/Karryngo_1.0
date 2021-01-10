import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/service/auth/auth.service';
import { UserService } from 'src/app/shared/service/user/user.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  emailPattern = '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$';

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
  ) { }

  initLoginForm () {
    this.formLogin = this.formBuilder.group({
      name         : ['', [Validators.required]],
      email        : ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password     : ['', [Validators.required]]
   });
   }

  ngOnInit() {
  }

  // connexion
  signIn(value) {
    this.router.navigate(['welcome']);

    this.userService.loginUser(this.formLogin.value.email,this.formLogin.value.password);
    this.userService.loginUser(UserService.userEncour.name, UserService.userEncour.pass);
    this.authService.authLogin(value.email,value.password).then(reponse => {

      //this.spinner.hide('login');
    this.toastr.success('You have been successfully Login!');
    this.router.navigate(['profie-carrier']);

   }).catch(error => {
      //this.spinner.hide('login');
   });
    
  }

  // when email and password is correct, user logged in.
   logIn(value) {

      /*this.spinner.show('login', {
         type: 'ball-spin-fade',
         size: 'large',
         bdColor: 'rgba(100,149,237, .8)',
         color: 'white'
       });*/

      this.authService.authLogin(value.name, value.password).then(reponse => {

         //this.spinner.hide('login');

      }).catch(error => {
         //this.spinner.hide('login');
      });
   }


   

}
