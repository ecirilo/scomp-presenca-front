import {Component, OnInit} from '@angular/core';
import {TPalestra} from "../../model/palestra.model";
import {PalestraService} from "../../services/palestra.service";
import {HttpResponse} from "@angular/common/http";
import {BehaviorSubject, concatMap} from "rxjs";

@Component({
  selector: 'app-palestras',
  templateUrl: './palestras.component.html',
  styleUrls: ['./palestras.component.css']
})
export class PalestrasComponent implements OnInit {
  displayedColumns: string[] = ['id', 'titulo', 'descricao', 'horario', 'acoes'];
  dataSource: TPalestra[] = [];

  constructor(
    private palestraService: PalestraService
  ) {}

  ngOnInit(): void {
    this.palestraService.query().subscribe((_response: HttpResponse<TPalestra[]>): void => {
      this.dataSource = _response.body ?? [];
    });
  }

  onDelete(palestra: TPalestra): void {
    this.palestraService.delete(palestra.id)
      .subscribe((_response: HttpResponse<void>): void => {
        this.dataSource = this.dataSource.filter((p: TPalestra): boolean => p.id !== palestra.id);
    });
  }
}
