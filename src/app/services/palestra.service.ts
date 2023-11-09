import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {TPalestra} from "../model/palestra.model";
import * as dayjs from "dayjs";

@Injectable({
  providedIn: 'root'
})
export class PalestraService {

  constructor(
    private client: HttpClient
  ) { }

  query(): Observable<HttpResponse<TPalestra[]>> {
    return this.client
      .get<TPalestra[]>('http://localhost:3000/api/palestras', { observe: 'response' })
      .pipe(map((_response: HttpResponse<TPalestra[]>) => {
        return _response.clone({ body: _response.body?.map((palestra: TPalestra) => {
            return {
              ...palestra,
              horario: dayjs(palestra.horario)
            }
          })
        });
      }));
  }

  find(id: number): Observable<HttpResponse<TPalestra>> {
    return this.client.get<TPalestra>(`http://localhost:3000/api/palestras/${id}`, { observe: 'response' });
  }

  save(palestra: TPalestra): Observable<HttpResponse<TPalestra>> {
    return this.client.post<TPalestra>('http://localhost:3000/api/palestras', palestra, { observe: 'response' });
  }

  update(palestra: TPalestra): Observable<HttpResponse<TPalestra>> {
    return this.client.put<TPalestra>(`http://localhost:3000/api/palestras/${palestra.id}`, palestra, { observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<void>> {
    return this.client.delete<void>(`http://localhost:3000/api/palestras/${id}`, { observe: 'response' });
  }
}
