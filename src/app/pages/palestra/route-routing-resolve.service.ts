import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {EMPTY, Observable, of} from 'rxjs';
import {mergeMap} from 'rxjs/operators';
import {HttpResponse} from '@angular/common/http';
import {PalestraService} from "../../services/palestra.service";
import {TPalestra} from "../../model/palestra.model";

@Injectable({
  providedIn: 'root',
})
export class PalestraRoutingResolveService implements Resolve<TPalestra> {
  constructor(protected service: PalestraService, protected router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<TPalestra> | Observable<never> {
    const id = route.params['id'];

    if (id) {
      return this.service.find(id).pipe(
        mergeMap((response: HttpResponse<TPalestra>) => {
          if (response.body) {
            return of(response.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }

    return of({} as TPalestra);
  }
}
