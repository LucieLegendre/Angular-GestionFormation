import { Component, OnInit, ViewChild } from '@angular/core';
import { SessionService } from '../service/session.service';
import { Session } from '../model/sessionModel';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { query } from '@angular/animations';
import { Specialite } from '../model/specialiteModel';
import { SpecialiteService } from '../service/specialite.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss'],

})

export class SessionsComponent implements OnInit {

  data: Session[] = [];
  session: Session = new Session;
  id: number;
  specialite: Specialite = new Specialite;
  listeSpecialite: Specialite[];


  constructor(private sessionService: SessionService, private specialiteService: SpecialiteService ,private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.sessionService.getSession().subscribe(
      res => {
      this.data = res;
        console.log(this.data)

      }
    )
  }

  catchSession(id) {
    console.log(id)
    this.router.navigate(['/editsession'], { queryParams: { id: id } });
  };


  deleteSession(id) {
    this.route.queryParams.subscribe(params => { this.id = +params['id'] || 0; });
    console.log(id)
    this.sessionService.deleteSession(id).subscribe(
      res => {
        console.log(res);
        this.data.splice(this.data.indexOf(this.data.filter(session => session.id == id)[0]), 1)


      }
    )
  }



}
