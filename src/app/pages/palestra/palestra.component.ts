import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TPalestra} from "../../model/palestra.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {PalestraService} from "../../services/palestra.service";
import {HttpResponse} from "@angular/common/http";
import Swal from "sweetalert2";
import {Observable} from "rxjs";

@Component({
  selector: 'app-palestra',
  templateUrl: './palestra.component.html',
  styleUrls: ['./palestra.component.css']
})
export class PalestraComponent {

  editForm: FormGroup = this.fb.group({
    id: [],
    nome: [''],
    descricao: [''],
    horario: [''],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly palestraService: PalestraService,
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(({palestra}): void => {
      this.updateFrom(palestra);
    });
  }

  onSave(): void {
    const palestra: TPalestra = this.createFromForm();
    if (palestra.id) {
      this.update(palestra);
    } else {
      this.create(palestra);
    }
  }

  private updateFrom(palestra: TPalestra): void {
    this.editForm.patchValue({
      id: palestra.id,
      nome: palestra.nome,
      descricao: palestra.descricao,
      horario: palestra.horario,
    });
  }

  private createFromForm(): TPalestra {
    return {
      id: this.editForm.get(['id'])!.value,
      nome: this.editForm.get(['nome'])!.value,
      descricao: this.editForm.get(['descricao'])!.value,
      horario: this.editForm.get(['horario'])!.value,
    }
  }

  private create(palestra: TPalestra): void {
    this.subscribeToResponse(this.palestraService.save(palestra), "Palestra criada com sucesso!");
  }

  private update(palestra: TPalestra): void {
    this.subscribeToResponse(this.palestraService.update(palestra), "Palestra atualizada com sucesso!");
  }

  private subscribeToResponse(o: Observable<HttpResponse<TPalestra>>, message: string): void {
    o.subscribe((response: HttpResponse<TPalestra>): void => {
      Swal.fire(message).then((): void => {
        this.router.navigate(['/palestras']);
      });
    });
  }
}
