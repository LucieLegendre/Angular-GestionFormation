import { Component, OnInit } from '@angular/core';
import { Specialite } from '../model/specialiteModel';
import { SpecialiteService } from '../service/specialite.service';

@Component({
  selector: 'app-une-specialite',
  templateUrl: './une-specialite.component.html',
  styleUrls: ['./une-specialite.component.scss']
})
export class UneSpecialiteComponent implements OnInit {

  id:number;
  specialite: Specialite = new Specialite;

  constructor(private specialiteService: SpecialiteService) { }

  ngOnInit() {
  }

  afficher(idSpe){
    this.specialiteService.getSpecialiteId(idSpe).subscribe(
      res=>{
        console.log(res);
      this.specialite=res;      }
    )

}
}
