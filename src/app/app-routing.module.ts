import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApprenantsComponent } from './apprenants/apprenants.component';
import { UnApprenantComponent } from './un-apprenant/un-apprenant.component';
import { AddApprenantComponent } from './add-apprenant/add-apprenant.component';
import { EditApprenantComponent } from './edit-apprenant/edit-apprenant.component';
import { AccueilComponent } from './accueil/accueil.component';
import { SessionsComponent } from './sessions/sessions.component';
import { UneSessionComponent } from './une-session/une-session.component';
import { AddSessionComponent } from './add-session/add-session.component';
import { EditSessionComponent } from './edit-session/edit-session.component';
import { SpecialitesComponent } from './specialites/specialites.component';
import { UneSpecialiteComponent } from './une-specialite/une-specialite.component'
import { AddSpecialiteComponent } from './add-specialite/add-specialite.component'
import { EditSpecialiteComponent } from './edit-specialite/edit-specialite.component'
import { FormateursComponent } from './formateurs/formateurs.component';
import { UnFormateurComponent } from './un-formateur/un-formateur.component'
import { AddFormateurComponent } from './add-formateur/add-formateur.component'
import { EditFormateurComponent } from './edit-formateur/edit-formateur.component'




const routes: Routes = [
  {
    path:'',
    component:AccueilComponent,
    data: {title:'accueil'}
  },
  {
    path:'apprenants',
    component:ApprenantsComponent,
    data: {title:'Liste des apprenants'}
  },
  {
    path:'unapprenant/:id',
    component:UnApprenantComponent,
    data:{title:'un apprenant'}
  },
  {
    path:'addapprenant',
    component:AddApprenantComponent,
    data:{title:'Ajouter un apprenant'}
  },
  {
    path:'editapprenant',
    component:EditApprenantComponent,
    data:{title:'Modifier un apprenant'}
  },
  {
    path:'sessions',
    component:SessionsComponent,
    data: {title:'Liste des sessions'}
  },
  {
    path:'unesession/:id',
    component:UneSessionComponent,
    data:{title:'une session '}
  },
  {
    path:'addsession',
    component:AddSessionComponent,
    data:{title:'Ajouter une session'}
  },
  {
    path:'editsession',
    component:EditSessionComponent,
    data:{title:'Modifier une session'}
  },

  {
    path:'specialites',
    component:SpecialitesComponent,
    data: {title:'Liste des specialites'}
  },
  {
    path:'unespecialite/:id',
    component:UneSpecialiteComponent,
    data:{title:'une specialite '}
  },
  {
    path:'addspecialite',
    component:AddSpecialiteComponent,
    data:{title:'Ajouter une specialite'}
  },
  {
    path:'editspecialite',
    component:EditSpecialiteComponent,
    data:{title:'Modifier une specialite'}
  },
  {
    path:'formateurs',
    component:FormateursComponent,
    data: {title:'Liste des formateurs'}
  },
  {
    path:'unformateur/:id',
    component:UnFormateurComponent,
    data:{title:'un formateur '}
  },
  {
    path:'addformateur',
    component:AddFormateurComponent,
    data:{title:'Ajouter un formateur'}
  },
  {
    path:'editformateur',
    component:EditFormateurComponent,
    data:{title:'Modifier un formateur'}
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
