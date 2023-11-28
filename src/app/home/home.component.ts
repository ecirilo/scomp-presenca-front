import { Component } from '@angular/core';
import Swal from "sweetalert2";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private authService: AuthService) {}

  onLogout(): void {
    this.authService.logout();
    Swal.fire("Logout", "Você foi desconectado com sucesso!", "success");
  }
}
