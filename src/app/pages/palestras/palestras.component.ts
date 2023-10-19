import { Component } from '@angular/core';

@Component({
  selector: 'app-palestras',
  templateUrl: './palestras.component.html',
  styleUrls: ['./palestras.component.css']
})
export class PalestrasComponent {
  displayedColumns: string[] = ['titulo', 'descricao', 'horario', 'palestrante', 'acoes'];
  dataSource = [
    {
      titulo: 'Além dos Códigos',
      descricao: 'Você já esteve em uma palestra SECOMP onde se sentiu perdido, como se estivessem falando em outra língua?',
      horario: '30/08 - 13:15'
    },
    {
      titulo: 'O Uso de Inteligência Artificial na Manutenção Industrial',
      descricao: 'Esta palestra oferece uma abordagem a fim de se conhecer e otimizar operações de manutenção e se destacar no mercado.',
      horario: '30/08 - 16:00'
    },
  ];
}
