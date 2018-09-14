import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './sections/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);
