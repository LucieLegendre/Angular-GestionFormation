import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Specialite } from '../model/specialiteModel';
import { SpecialiteService } from '../service/specialite.service';

@Component({
  selector: 'app-edit-specialite',
  templateUrl: './edit-specialite.component.html',
  styleUrls: ['./edit-specialite.component.scss']
})
export class EditSpecialiteComponent implements OnInit {

  id: number;
  specialite: Specialite = new Specialite;

  constructor(private specialiteService: SpecialiteService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params =>{this.id = +params['id'] || 0;});
    this.specialiteService.getSpecialiteId(this.id).subscribe(
      res => {
        console.log(res);
        this.specialite = res;
      }
    )
  }

  updateSpecialite(specialite) {   
    this.specialiteService.updateSpecialite(specialite).subscribe(
    res => { 
     console.log(this.specialite)
     this.router.navigate(['/specialites']);
    }
  )
}

}
