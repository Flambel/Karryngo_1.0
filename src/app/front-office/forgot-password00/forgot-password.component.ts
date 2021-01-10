import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/service/user/user.service';
import { ApiService } from '../../shared/service/api/api.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  verify = false;

  email: string;
  constructor(
    private userService: UserService,
    private api: ApiService
  ) { }

  ngOnInit() {
  }

  // send email code
  sendEmailCode(value) {
    //this.email = 'christophetamba@gmail.com';
    this.userService.sendCodeUserByEmail(value.email);
    this.verify = true;
  }

  // verify a code
  verifyCode() {

  }

}
