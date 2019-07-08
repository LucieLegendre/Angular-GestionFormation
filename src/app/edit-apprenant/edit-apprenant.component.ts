import { Component, OnInit } from '@angular/core';
import { ApprenantService } from '../service/apprenant.service';
import { Apprenant } from '../model/apprenantModel';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Session } from '../model/sessionModel';
import { SessionService } from '../service/session.service';




@Component({
  selector: 'app-edit-apprenant',
  templateUrl: './edit-apprenant.component.html',
  styleUrls: ['./edit-apprenant.component.scss']
})
export class EditApprenantComponent implements OnInit {

  id: number = null;
  apprenant: Apprenant = new Apprenant;
  sessionId: number;
  session: Session = new Session;
  listSession: Session[];
  selectedSession;
  nouvelleSession



  constructor(private apprenantService: ApprenantService, private sessionService: SessionService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => { this.id = +params['id'] || 0; });
    this.apprenantService.getApprenantId(this.id).subscribe(
      res => {
        console.log("RES --------" + res['session']);
        this.apprenant = res;
      }
    )
    this.sessionService.getSession().subscribe(
      res => {
      this.listSession = res;
        console.log(this.listSession)
      }
    )
  }


  editApprenant(app) {

    this.sessionService.getSessionId(this.selectedSession).subscribe(
      resSess => {

        this.nouvelleSession = resSess;

        this.apprenantService.updateApprenant(app).subscribe(
          resApp => {
            let appEdit = resApp;
            console.log("ID PARAMETER" + appEdit.id)
            console.log("SESSION PARAMETER" + this.nouvelleSession)
            this.apprenantService.linkSessionApprenant(appEdit.id, this.nouvelleSession).subscribe(
              res => {
                console.log(res)
                this.router.navigate(['/apprenants']);
              }
            )
          }
        )
      }
    )
  }
}
