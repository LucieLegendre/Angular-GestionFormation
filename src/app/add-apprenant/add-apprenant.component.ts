import { Component, OnInit } from '@angular/core';
import { ApprenantService } from '../service/apprenant.service';
import { Apprenant } from '../model/apprenantModel';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Session } from '../model/sessionModel';
import { SessionService } from '../service/session.service';

@Component({
  selector: 'app-add-apprenant',
  templateUrl: './add-apprenant.component.html',
  styleUrls: ['./add-apprenant.component.scss']
})

export class AddApprenantComponent implements OnInit {

  apprenant: Apprenant = new Apprenant;
  session: Session = new Session;
  sessionId: number = null;
  listSession: Session[];
  selectedSession;


  constructor(private apprenantService: ApprenantService, private sessionService: SessionService, private router: Router) {

  }

  ngOnInit() {
    this.sessionService.getSession().subscribe(
      res => {
        this.listSession = res;
        console.log(this.listSession)
      }
    )
  }

  onSubmit(app) {

    this.sessionService.getSessionId(this.sessionId).subscribe(
      resSess => {
        console.log(resSess)
        this.selectedSession = resSess
      }
    )

    this.apprenantService.addApprenant(app).subscribe(
      resApp => {
        let apprenantAjoute = resApp;
        console.log(this.selectedSession)
        this.apprenantService.linkSessionApprenant(apprenantAjoute.id, this.selectedSession).subscribe(
          res => {
            console.log(res)
            this.router.navigate(['/apprenants']);
          }
        )
      }
    )
  }
}
