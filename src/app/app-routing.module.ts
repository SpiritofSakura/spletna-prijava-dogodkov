import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Components/main/main.component';
import { PrijavaComponent } from './Components/prijava/prijava.component';
import { PrijavniceComponent } from './Components/prijavnice/prijavnice.component';
import { ObrazecComponent } from './Components/obrazec/obrazec.component';
import { Prijavnice1Component } from './Components/prijavnice1/prijavnice1.component';
import { ArhivComponent } from './Components/arhiv/arhiv.component';
import { KoledarComponent } from './Components/koledar/koledar.component';
import { PrijavniceAdminComponent } from './Components/prijavnice-admin/prijavnice-admin.component';
import { AuthGuard } from './auth.guard';
import { ArhivSoleComponent } from './Components/arhiv-sole/arhiv-sole.component';
import { TerminComponent } from './Components/termin/termin.component';
import { PromotorComponent } from './Components/promotor/promotor.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'prijava',component: PrijavaComponent},
  {path: 'prijavnice',component: PrijavniceComponent },
  {path: 'obrazec', component: ObrazecComponent},
  {path: 'prijavnice1', component: Prijavnice1Component},
  {path: 'arhiv',component: ArhivComponent},
  {path: 'koledar', component: KoledarComponent},
  {path:'prijavnice_admin', component: PrijavniceAdminComponent},
  {path: 'arhiv_sole', component: ArhivSoleComponent},
  {path: 'termin', component: TerminComponent},
  {path: 'promotor', component: PromotorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
