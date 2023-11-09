import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {EMPTY, Observable, of} from 'rxjs';
import {mergeMap} from 'rxjs/operators';
import {HttpResponse} from '@angular/common/http';
import {TAluno} from "../../model/aluno.model";
import {AlunoService} from "../../services/aluno.service";

@Injectable({
  providedIn: 'root',
})
export class AlunoRoutingResolveService implements Resolve<TAluno> {
  constructor(protected service: AlunoService, protected router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<TAluno> | Observable<never> {
    const id = route.params['id'];

    if (id) {
      return this.service.find(id).pipe(
        mergeMap((response: HttpResponse<TAluno>) => {
          if (response.body) {
            return of(response.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }

    return of({} as TAluno);
  }
}
