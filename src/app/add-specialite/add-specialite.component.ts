import { Component, OnInit } from '@angular/core';
import { Specialite } from '../model/specialiteModel';
import { SpecialiteService } from '../service/specialite.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-add-specialite',
  templateUrl: './add-specialite.component.html',
  styleUrls: ['./add-specialite.component.scss']
})
export class AddSpecialiteComponent implements OnInit {

  specialite: Specialite = new Specialite;

  constructor(private specialiteService: SpecialiteService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(specialite) {
    this.specialiteService.addSpecialite(specialite).subscribe(
      res => {
        console.log(this.specialite)
        this.router.navigate(['/specialites']);
      }
    )
  }
}
