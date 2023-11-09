import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpResponse} from "@angular/common/http";
import Swal from "sweetalert2";
import {Observable} from "rxjs";
import {TAluno} from "../../model/aluno.model";
import {AlunoService} from "../../services/aluno.service";

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent {

  editForm: FormGroup = this.fb.group({
    id: [],
    nome: [''],
    matricula: [''],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly alunoService: AlunoService,
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(({aluno}): void => {
      this.updateFrom(aluno);
    });
  }

  onSave(): void {
    const aluno: TAluno = this.createFromForm();
    if (aluno.id) {
      this.update(aluno);
    } else {
      this.create(aluno);
    }
  }

  private updateFrom(aluno: TAluno): void {
    console.log("-----------------------------------")
    console.log(aluno);
    this.editForm.patchValue({
      id: aluno.id,
      nome: aluno.nome,
      matricula: aluno.matricula
    });
  }

  private createFromForm(): TAluno {
    return {
      id: this.editForm.get(['id'])!.value,
      nome: this.editForm.get(['nome'])!.value,
      matricula: this.editForm.get(['matricula'])!.value
    }
  }

  private create(aluno: TAluno): void {
    this.subscribeToResponse(this.alunoService.save(aluno), "Aluno criado com sucesso!");
  }

  private update(aluno: TAluno): void {
    this.subscribeToResponse(this.alunoService.update(aluno), "Aluno atualizado com sucesso!");
  }

  private subscribeToResponse(o: Observable<HttpResponse<TAluno>>, message: string): void {
    o.subscribe((response: HttpResponse<TAluno>): void => {
      Swal.fire(message).then((): void => {
        this.router.navigate(['/alunos']);
      });
    });
  }
}
