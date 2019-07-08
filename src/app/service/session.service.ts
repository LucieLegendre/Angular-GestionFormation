import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Session } from '../model/sessionModel';
import { Specialite } from '../model/specialiteModel';


const httpOptions = {
  headers: new HttpHeaders({'Content-type':'application/json'})
};

const apiurl = "http://localhost:8080/SpringMVC/";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http: HttpClient) { }

  getSession(): Observable<Session[]>{
    return this.http.get<Session[]>(apiurl+"api/session/list").pipe();
  }

  getSessionId(id:number): Observable<Session>{
    return this.http.get<Session>(apiurl+"api/session/unesession/"+id).pipe();
  }

  addSession(session: Session) : Observable<Session>{
    return this.http.post<Session>(apiurl + "api/session/addsession", session,httpOptions).pipe();
  }

  updateSession(session: Session) : Observable<Session>{
    return this.http.put<Session>(apiurl+"api/session/updatesession", session,httpOptions).pipe();
  }

  deleteSession(id:number) : Observable<any>{
    return this.http.delete(apiurl+"api/session/deletesession/"+id).pipe();
  }

  linkSpecialiteSession(id:number, specialite:Specialite): Observable<Session>{
    return this.http.put<Session>(apiurl+"api/session/specialite/"+id, specialite,httpOptions).pipe();
  }
}
