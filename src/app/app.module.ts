import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PalestrasComponent} from './pages/palestras/palestras.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTableModule} from "@angular/material/table";
import { PalestraComponent } from './pages/palestra/palestra.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {DatetimePipe} from "./shaded/datetime.pipe";
import {AlunosComponent} from "./pages/alunos/alunos.component";
import {AlunoComponent} from "./pages/aluno/aluno.component";

@NgModule({
  declarations: [
    AppComponent,
    PalestrasComponent,
    PalestraComponent,
    AlunosComponent,
    AlunoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    SweetAlert2Module.forRoot(),
    DatetimePipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
