import { Component, OnInit } from '@angular/core';
import { Formateur } from '../model/formateurModel';
import { FormateurService } from '../service/formateur.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Session } from '../model/sessionModel';
import { SessionService } from '../service/session.service';

@Component({
  selector: 'app-add-formateur',
  templateUrl: './add-formateur.component.html',
  styleUrls: ['./add-formateur.component.scss']
})
export class AddFormateurComponent implements OnInit {

  formateur: Formateur = new Formateur;
  session: Session = new Session;
  sessionId: number = null;
  listSession: Session[];
  selectedSession;


  constructor(private formateurService: FormateurService, private sessionService: SessionService, private router: Router) { }

  ngOnInit() {
    this.sessionService.getSession().subscribe(
      res => {
        this.listSession = res;
        console.log(this.listSession)
      }
    )
  }

  onSubmit(formateur) {
    this.sessionService.getSessionId(this.sessionId).subscribe(
      resSess => {
        console.log(resSess)
        this.selectedSession = resSess
      }
    )

    this.formateurService.addFormateur(formateur).subscribe(
      resForm => {
        let formateurAjoute = resForm;
        console.log(this.selectedSession)
        this.formateurService.linkSessionFormateur(formateurAjoute.id, this.selectedSession).subscribe(
          res => {
            console.log(res)
            this.router.navigate(['/formateurs']);
          }
        )
      }
    )
  }
}
