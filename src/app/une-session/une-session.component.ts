import { Component, OnInit } from '@angular/core';
import { Session } from '../model/sessionModel';
import { SessionService } from '../service/session.service';

@Component({
  selector: 'app-une-session',
  templateUrl: './une-session.component.html',
  styleUrls: ['./une-session.component.scss']
})
export class UneSessionComponent implements OnInit {

  id: number;
  session: Session =  new Session;

  constructor(private sessionService: SessionService) { }

  ngOnInit() {
    
  }

  afficher(idSess){
    this.sessionService.getSessionId(idSess).subscribe(
      res => {
        console.log(res);
        this.session = res;
      }
    )
  }
}
