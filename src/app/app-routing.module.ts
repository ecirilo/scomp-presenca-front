import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PalestrasComponent} from "./pages/palestras/palestras.component";
import {PalestraComponent} from "./pages/palestra/palestra.component";
import {HomeComponent} from "./home/home.component";
import {PalestraRoutingResolveService} from "./pages/palestra/route-routing-resolve.service";
import {AlunosComponent} from "./pages/alunos/alunos.component";
import {AlunoComponent} from "./pages/aluno/aluno.component";
import {AlunoRoutingResolveService} from "./pages/aluno/route-routing-resolve.service";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'palestras', component: PalestrasComponent },
  { path: 'palestra/:id',
    component: PalestraComponent,
    resolve: {
      palestra: PalestraRoutingResolveService,
    }
  },
  { path: 'alunos', component: AlunosComponent },
  { path: 'aluno/:id',
    component: AlunoComponent,
    resolve: {
      aluno: AlunoRoutingResolveService,
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
