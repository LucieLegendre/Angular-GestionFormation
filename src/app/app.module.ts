import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApprenantsComponent } from './apprenants/apprenants.component';
import { UnApprenantComponent } from './un-apprenant/un-apprenant.component';
import { AddApprenantComponent } from './add-apprenant/add-apprenant.component';
import { EditApprenantComponent } from './edit-apprenant/edit-apprenant.component';
import { from } from 'rxjs';
import { HttpClient } from 'selenium-webdriver/http';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { SessionsComponent } from './sessions/sessions.component';
import { UneSessionComponent } from './une-session/une-session.component';
import { AddSessionComponent } from './add-session/add-session.component';
import { EditSessionComponent } from './edit-session/edit-session.component';
import { MatTableModule } from "@angular/material/table";
import {MatSortModule} from '@angular/material/sort';
import { DatePipe } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import { SpecialitesComponent } from './specialites/specialites.component';
import { UneSpecialiteComponent } from './une-specialite/une-specialite.component';
import { AddSpecialiteComponent } from './add-specialite/add-specialite.component';
import { EditSpecialiteComponent } from './edit-specialite/edit-specialite.component';
import { EditFormateurComponent } from './edit-formateur/edit-formateur.component';
import { AddFormateurComponent } from './add-formateur/add-formateur.component';
import { UnFormateurComponent } from './un-formateur/un-formateur.component';
import { FormateursComponent } from './formateurs/formateurs.component';



@NgModule({
  declarations: [
    AppComponent,
    ApprenantsComponent,
    UnApprenantComponent,
    AddApprenantComponent,
    EditApprenantComponent,
    AccueilComponent,
    SessionsComponent,
    UneSessionComponent,
    AddSessionComponent,
    EditSessionComponent,
    SpecialitesComponent,
    UneSpecialiteComponent,
    AddSpecialiteComponent,
    EditSpecialiteComponent,
    EditFormateurComponent,
    AddFormateurComponent,
    UnFormateurComponent,
    FormateursComponent
 
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatInputModule,
    RouterModule, 
    MatCardModule,
    MatTableModule,
    MatSortModule,
    MatSelectModule
 
  ],

  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
