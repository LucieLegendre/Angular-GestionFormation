import { Component, OnInit } from '@angular/core';
import { SessionService } from '../service/session.service';
import { Session } from '../model/sessionModel';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Specialite } from '../model/specialiteModel';
import { SpecialiteService } from '../service/specialite.service';


@Component({
  selector: 'app-edit-session',
  templateUrl: './edit-session.component.html',
  styleUrls: ['./edit-session.component.scss']
})
export class EditSessionComponent implements OnInit {

  id: number;
  session: Session = new Session;
  specialiteId: number;
  specialite: Specialite = new Specialite;
  listeSpecialite: Specialite[];
  selectedSpecialite;
  newSpecialite;


  constructor(private sessionService: SessionService, private specialiteService: SpecialiteService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => { this.id = +params['id'] || 0; });
    this.sessionService.getSessionId(this.id).subscribe(
      res => {
        console.log("RES --------" + res['specialite']);
        this.session = res;
      }
    )
    this.specialiteService.getSpecialite().subscribe(
      res => {
        this.listeSpecialite = res;
        console.log(this.listeSpecialite)
      }
    )
  }

  editSession(session) {
    this.specialiteService.getSpecialiteId(this.selectedSpecialite).subscribe(
      resSpe => {
        console.log("RESSPE------------------" + this.selectedSpecialite)
        this.newSpecialite = resSpe;

        this.sessionService.updateSession(session).subscribe(
          resSess => {
            let sessEdit = resSess;
            console.log("ID PARAMETER" + sessEdit.id)
            console.log("SESSION PARAMETER" + this.newSpecialite)
            this.sessionService.linkSpecialiteSession(sessEdit.id, this.newSpecialite).subscribe(
              res => {
                console.log(res)
                this.router.navigate(['/sessions']);
              }
            )
          }
        )
      }
    )
  }
}
