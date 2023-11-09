import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {TPalestra} from "../model/palestra.model";
import * as dayjs from "dayjs";
import {TAluno} from "../model/aluno.model";

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(
    private client: HttpClient
  ) { }

  query(): Observable<HttpResponse<TAluno[]>> {
    return this.client
      .get<TAluno[]>('http://localhost:3000/api/alunos', { observe: 'response' });
  }

  find(id: number): Observable<HttpResponse<TAluno>> {
    return this.client.get<TAluno>(`http://localhost:3000/api/alunos/${id}`, { observe: 'response' });
  }

  save(aluno: TAluno): Observable<HttpResponse<TAluno>> {
    return this.client.post<TAluno>('http://localhost:3000/api/alunos', aluno, { observe: 'response' });
  }

  update(aluno: TAluno): Observable<HttpResponse<TAluno>> {
    return this.client.put<TAluno>(`http://localhost:3000/api/alunos/${aluno.id}`, aluno, { observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<void>> {
    return this.client.delete<void>(`http://localhost:3000/api/alunos/${id}`, { observe: 'response' });
  }
}
