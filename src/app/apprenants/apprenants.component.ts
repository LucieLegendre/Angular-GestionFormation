import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import {ApprenantService} from '../service/apprenant.service';
import { Apprenant } from '../model/apprenantModel';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { query } from '@angular/animations';
import {MatTable} from '@angular/material';
import { Session } from '../model/sessionModel';
import { SessionService } from '../service/session.service';


@Component({
  selector: 'app-apprenants',
  templateUrl: './apprenants.component.html',
  styleUrls: ['./apprenants.component.scss']
})
export class ApprenantsComponent implements OnInit {

  data: Apprenant[] = [];
  apprenant: Apprenant = new Apprenant;
  id: number;

  show:boolean = true;
  buttonName:any = 'Hide';
  

  constructor(private apprenantService: ApprenantService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.apprenantService.getApprenant().subscribe(
      res => {this.data = res;
       console.log(this.data)
      })

  }

  toggle() {
    this.show = !this.show;
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }

  catchApprenant(id){
    console.log(id)
        this.router.navigate(['/editapprenant'],{queryParams: {id: id} } );
      };

  deleteApprenant(id){
    this.route.queryParams.subscribe(params =>{this.id = +params['id'] || 0;});
    console.log(id)
    this.apprenantService.deleteApprenant(id).subscribe(
      res => {
        console.log(res);
        
        this.data.splice(this.data.indexOf(this.data.filter(apprenant => apprenant.id == id)[0]),1) 
       
        
      }
    )
  }
  
  
  

}
