import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from '../../../pages/index/index.component';

const routes: Routes = [
    {
        path: '',
        component: IndexComponent,
        children: [
            {
                path: '',
                redirectTo: 'presidentes',
                pathMatch: 'full'
            },
            {
                path: 'presidentes',
                loadChildren: '../presidentes/presidentes.module#PresidentesModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SinDictadurasWebRoutingModule { }