import { Component, OnInit } from '@angular/core';
import { Formateur } from '../model/formateurModel';
import { FormateurService } from '../service/formateur.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Session } from '../model/sessionModel';
import { SessionService } from '../service/session.service';

@Component({
  selector: 'app-formateurs',
  templateUrl: './formateurs.component.html',
  styleUrls: ['./formateurs.component.scss']
})
export class FormateursComponent implements OnInit {

  data: Formateur[] = [];
  formateur: Formateur = new Formateur;
  id: number;
  session: Session= new Session;
  sessionId: number = null;
  listSession: Session[];

  constructor(private formateurService: FormateurService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.formateurService.getFormateur().subscribe(
      res => {
      this.data = res;
        console.log(this.data)

      }
    )
  }

  catchFormateur(id) {
    console.log(id)
    this.router.navigate(['/editformateur'], { queryParams: { id: id } });
  };


  deleteFormateur(id) {
    this.route.queryParams.subscribe(params => { this.id = +params['id'] || 0; });
    console.log(id)
    this.formateurService.deleteFormateur(id).subscribe(
      res => {
        console.log(res);
        this.data.splice(this.data.indexOf(this.data.filter(formateur => formateur.id == id)[0]), 1)


      }
    )
  }

}
