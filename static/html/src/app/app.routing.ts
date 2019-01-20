import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { HopComponent } from './pages/hop/hop.component';
import { ArticleComponent } from './pages/article/article.component';
import { FaqComponent } from './pages/faq/faq.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'continuous/:hop', component: HopComponent },
  { path: 'continuous/:hop/:article', component: ArticleComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(routes);
