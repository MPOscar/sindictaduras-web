import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
//
import { MostrarPresidenteDialogModule } from './modules/mostrar-presidente-dialog/mostrar-presidente-dialog.module';
import { UiModule } from '../../ui/ui.module';
import { AuthenticationModule } from '../../common/authentication/authentication.module';
import { PresidentesModule } from './modules/presidentes/presidentes.module';
import { VotacionModule } from './modules/votacion/votacion.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    //
    BsDropdownModule,
    //
    UiModule,
    //
    MostrarPresidenteDialogModule,
    PresidentesModule,
    VotacionModule,
    AuthenticationModule,
    UsuariosModule,
    RouterModule
  ],
  declarations: [
    NavBarComponent
  ],
  exports: [
    NavBarComponent
  ]
})
export class DictadurasWebModule { }
