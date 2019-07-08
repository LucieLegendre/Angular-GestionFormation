import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Apprenant } from '../model/apprenantModel';
import { Session } from '../model/sessionModel';


const httpOptions = {
  headers: new HttpHeaders({'Content-type':'application/json'})
};

const apiurl = "http://localhost:8080/SpringMVC/";

@Injectable({
  providedIn: 'root'
})
export class ApprenantService {

  constructor(private http: HttpClient) { }

  getApprenant(): Observable<Apprenant[]>{
    return this.http.get<Apprenant[]>(apiurl+"api/apprenants/list").pipe();
  }

  getApprenantId(id:number): Observable<Apprenant>{
    return this.http.get<Apprenant>(apiurl+"api/apprenants/unapprenant/"+id).pipe();
  }

  addApprenant(apprenant: Apprenant) : Observable<Apprenant>{
    return this.http.post<Apprenant>(apiurl + "api/apprenants/addapprenant", apprenant,httpOptions).pipe();
  }

  updateApprenant(apprenant: Apprenant) : Observable<Apprenant>{
    return this.http.put<Apprenant>(apiurl+"api/apprenants/updateapprenant", apprenant,httpOptions).pipe();
  }

  deleteApprenant(id:number) : Observable<any>{
    return this.http.delete(apiurl+"api/apprenants/deleteapp/"+id).pipe();
  }

  linkSessionApprenant(id:number, session:Session): Observable<Apprenant>{
    return this.http.put<Apprenant>(apiurl+"api/apprenants/session/"+id, session,httpOptions).pipe();
  }
}
