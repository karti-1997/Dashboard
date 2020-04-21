import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GatecountComponent } from './gatecount/gatecount.component';
import { LoginComponent } from './login/login.component';
import { ConnectComponent } from './connect/connect.component';
import { CreateComponent } from './create/create.component';
import { VisitordashletsComponent } from './visitordashlets/visitordashlets.component'
import { BooksusageComponent } from './booksusage/booksusage.component';
import { CounterComponent } from './counter/countercomponent';
import { GeneralDashboardComponent } from './general-dashboard/general-dashboard.component';
import { CustomComponent } from './custom/custom.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'gatecount', component: GatecountComponent},
  {path: 'general-dashboard', component:GeneralDashboardComponent},
  {path: 'Login', component:LoginComponent},
  {path: 'connect', component:ConnectComponent},
  {path: 'create', component:CreateComponent},
  {path: 'bookusage', component:BooksusageComponent},
  {path: 'visitordashboard',component:VisitordashletsComponent},
  {path: 'counter',component:CounterComponent},
  {path: 'custom', component:CustomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
