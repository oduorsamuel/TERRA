import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'overview-page',
    loadChildren: () => import('./overview-page/overview.module').then(m => m.OverviewModule),
  },
  { path: '',
    redirectTo: '/overview-page',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
