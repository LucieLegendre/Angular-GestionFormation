import { Component, OnInit } from '@angular/core';
import { SessionService } from '../service/session.service';
import { Session } from '../model/sessionModel';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Specialite } from '../model/specialiteModel';
import { SpecialiteService } from '../service/specialite.service';

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.scss']
})
export class AddSessionComponent implements OnInit {

  session: Session = new Session;
  specialite: Specialite = new Specialite;
  specialiteId: number = null;
  listSpecialite: Specialite[];
  selectSpecialite

  constructor(private sessionService: SessionService, private specialiteService: SpecialiteService, private router: Router) { }

  ngOnInit() {
    this.specialiteService.getSpecialite().subscribe(
      res => {
        this.listSpecialite = res;
        console.log(this.listSpecialite)
      }
    )
  }

  onSubmit(session) {
    this.specialiteService.getSpecialiteId(this.specialiteId).subscribe(
      resSpe => {
        console.log(resSpe)
        this.selectSpecialite = resSpe
      }
    )

    this.sessionService.addSession(session).subscribe(
      resSession => {
        let sessionAjoute = resSession;
        console.log(this.selectSpecialite)
        this.sessionService.linkSpecialiteSession(sessionAjoute.id, this.selectSpecialite).subscribe(
          res => {
            console.log(res)
            this.router.navigate(['/sessions']);
          }
        )
      }
    )
  }
}
