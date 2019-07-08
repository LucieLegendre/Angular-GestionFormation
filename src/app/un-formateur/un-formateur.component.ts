import { Component, OnInit } from '@angular/core';
import { Formateur } from '../model/formateurModel';
import { FormateurService } from '../service/formateur.service';

@Component({
  selector: 'app-un-formateur',
  templateUrl: './un-formateur.component.html',
  styleUrls: ['./un-formateur.component.scss']
})
export class UnFormateurComponent implements OnInit {


  id: number;
  formateur: Formateur =  new Formateur;

  constructor(private formateurService: FormateurService) { }

  ngOnInit() {
    
  }

  afficher(idForm){
    this.formateurService.getFormateurId(idForm).subscribe(
      res => {
        console.log(res);
        this.formateur = res;
      }
    )
  }
}
