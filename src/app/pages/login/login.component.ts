import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {HttpResponse} from "@angular/common/http";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onLogin(): void {
    this.authService.login(this.username, this.password)
      .subscribe((response: HttpResponse<any>) => {
        this.router.navigate([''])
      });
  }
}
