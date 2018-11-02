import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { Routing } from './app.routing';

import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { IntegrationComponent } from './pages/integration/integration.component';
import { TestingComponent } from './pages/testing/testing.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { DeploymentComponent } from './pages/deployment/deployment.component';
import { OperationComponent } from './pages/operation/operation.component';
import { FaqComponent } from './pages/faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    IntegrationComponent,
    TestingComponent,
    DeliveryComponent,
    DeploymentComponent,
    OperationComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Routing,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
