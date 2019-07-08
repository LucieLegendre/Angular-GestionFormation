import { Component, OnInit } from '@angular/core';
import { ApprenantService } from '../service/apprenant.service';
import { Apprenant } from '../model/apprenantModel';

@Component({
  selector: 'app-un-apprenant',
  templateUrl: './un-apprenant.component.html',
  styleUrls: ['./un-apprenant.component.scss']
})
export class UnApprenantComponent implements OnInit {

  id: number;
  apprenant: Apprenant = new Apprenant;

  constructor(private apprenantService: ApprenantService) { }

  ngOnInit() {

  }

  afficher(id){
    this.apprenantService.getApprenantId(id).subscribe(
      res => {
        console.log(res);
        this.apprenant = res;
      }
    )
  }
}