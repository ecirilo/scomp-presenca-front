import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl: string = 'http://localhost:3000/api/login';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(this.loginUrl, {
      nome: username,
      senha: password
    })
      .pipe(
        tap((response: any) => this.setSession(response))
      );
  }

  private setSession(authResult: any): void {
    localStorage.setItem('token', authResult.access_token);
  }

  logout() {
    localStorage.removeItem('token');
  }

  public isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
