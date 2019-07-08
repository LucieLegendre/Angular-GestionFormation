import { Component, OnInit } from '@angular/core';
import { Formateur } from '../model/formateurModel';
import { FormateurService } from '../service/formateur.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Session } from '../model/sessionModel';
import { SessionService } from '../service/session.service';

@Component({
  selector: 'app-edit-formateur',
  templateUrl: './edit-formateur.component.html',
  styleUrls: ['./edit-formateur.component.scss']
})
export class EditFormateurComponent implements OnInit {

  id: number;
  formateur: Formateur = new Formateur;
  sessionId: number;
  session: Session = new Session;
  listSession: Session[];
  selectedSession;
  nouvelleSession

  constructor(private formateurService: FormateurService, private sessionService: SessionService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => { this.id = +params['id'] || 0; });
    this.formateurService.getFormateurId(this.id).subscribe(
      res => {
        console.log(res);
        this.formateur = res;
      }
    )
    this.sessionService.getSession().subscribe(
      res => {
        this.listSession = res;
        console.log(this.listSession)
      }
    )
  }

  updateFormateur(formateur) {
    this.sessionService.getSessionId(this.selectedSession).subscribe(
      resSess => {
        this.nouvelleSession = resSess;

        this.formateurService.updateFormateur(formateur).subscribe(
          resForm => {
            let formEdit = resForm;
            console.log("ID PARAMETER" + formEdit.id)
            console.log("SESSION PARAMETER" + this.nouvelleSession)
            this.formateurService.linkSessionFormateur(formEdit.id, this.nouvelleSession).subscribe(
              res => {
                console.log(res)
                this.router.navigate(['/formateurs']);

              }
            )
          }
        )
      }
    )
  }
}
