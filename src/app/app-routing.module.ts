import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ScreenfiveComponent } from './screenfive/screenfive.component';
import { ScreenfourComponent } from './screenfour/screenfour.component';

const routes: Routes = [
  { path: 'overview-page',
    loadChildren: () => import('./overview-page/overview.module').then(m => m.OverviewModule),
  },
  { path: 'login',
    component : LoginComponent
  },
  { path: 'screen4',
  component : ScreenfourComponent
},
{ path: 'screen5',
component : ScreenfiveComponent
},
  { path: '',
  redirectTo: 'login',
  pathMatch: 'full'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
