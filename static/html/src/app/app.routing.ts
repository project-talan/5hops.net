import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { IntegrationComponent } from './pages/integration/integration.component';
import { TestingComponent } from './pages/testing/testing.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { DeploymentComponent } from './pages/deployment/deployment.component';
import { OperationComponent } from './pages/operation/operation.component';
import { FaqComponent } from './pages/faq/faq.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'continuous-integration', component: IntegrationComponent },
  { path: 'continuous-integration/:subSection', component: IntegrationComponent },
  { path: 'continuous-testing', component: TestingComponent },
  { path: 'continuous-delivery', component: DeliveryComponent },
  { path: 'continuous-deployment', component: DeploymentComponent },
  { path: 'continuous-operation', component: OperationComponent },
  { path: 'faq', component: FaqComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(routes);
