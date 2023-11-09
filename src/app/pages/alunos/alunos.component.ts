import {Component, OnInit} from '@angular/core';
import {HttpResponse} from "@angular/common/http";
import {AlunoService} from "../../services/aluno.service";
import {TAluno} from "../../model/aluno.model";

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'matricula', 'nome', 'acoes'];
  dataSource: TAluno[] = [];

  constructor(
    private alunoService: AlunoService
  ) {}

  ngOnInit(): void {
    this.alunoService.query().subscribe((_response: HttpResponse<TAluno[]>): void => {
      this.dataSource = _response.body ?? [];
    });
  }

  onDelete(aluno: TAluno): void {
    this.alunoService.delete(aluno.id)
      .subscribe((_response: HttpResponse<void>): void => {
        this.dataSource = this.dataSource.filter((p: TAluno): boolean => p.id !== aluno.id);
    });
  }
}
