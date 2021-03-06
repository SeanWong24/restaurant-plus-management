import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablePage } from './table.page';

const routes: Routes = [
  {
    path: '',
    component: TablePage
  },
  {
    path: ':id',
    loadChildren: () => import('./table-detail/table-detail.module').then( m => m.TableDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablePageRoutingModule {}
