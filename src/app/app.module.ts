import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './Components/main/main.component';
import { PrijavaComponent } from './Components/prijava/prijava.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PrijavniceComponent } from './Components/prijavnice/prijavnice.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ObrazecComponent } from './Components/obrazec/obrazec.component';
import { Prijavnice1Component } from './Components/prijavnice1/prijavnice1.component';
import { KoledarComponent } from './Components/koledar/koledar.component';
import { ArhivComponent } from './Components/arhiv/arhiv.component';
import { PrijavniceAdminComponent } from './Components/prijavnice-admin/prijavnice-admin.component';
import { ArhivSoleComponent } from './Components/arhiv-sole/arhiv-sole.component';
import { TerminComponent } from './Components/termin/termin.component';
import { PromotorComponent } from './Components/promotor/promotor.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PrijavaComponent,
    PrijavniceComponent,
    ObrazecComponent,
    Prijavnice1Component,
    KoledarComponent,
    ArhivComponent,
    PrijavniceAdminComponent,
    ArhivSoleComponent,
    TerminComponent,
    PromotorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
