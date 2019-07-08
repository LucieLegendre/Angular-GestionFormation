import { Component, OnInit } from '@angular/core';
import { Specialite } from '../model/specialiteModel';
import { SpecialiteService } from '../service/specialite.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-specialites',
  templateUrl: './specialites.component.html',
  styleUrls: ['./specialites.component.scss']
})
export class SpecialitesComponent implements OnInit {

  data: Specialite[] = [];
  specialite: Specialite = new Specialite;
  id: number;

  constructor(private specialiteService: SpecialiteService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.specialiteService.getSpecialite().subscribe(
      res => {
        this.data = res
        console.log(this.data)
      }
    )
  }

  catchSpecialite(id) {
    console.log(id)
    this.router.navigate(['./editspecialite'], { queryParams: { id: id } });
  };

  deleteSpecialite(id) {
    this.route.queryParams.subscribe(params => { this.id = +params['id'] || 0; })
    console.log(id);
    this.specialiteService.deleteSpecialite(id).subscribe(
      res => {
        console.log(res);
        this.data.splice(this.data.indexOf(this.data.filter(specialite => specialite.id == id)[0]), 1)
      }
    )

  }

}
