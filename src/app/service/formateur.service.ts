import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Formateur } from '../model/formateurModel';
import { Session } from '../model/sessionModel';
import { Specialite } from '../model/specialiteModel';

const httpOptions = {
  headers: new HttpHeaders({'Content-type':'application/json'})
};

const apiurl = "http://localhost:8080/SpringMVC/";

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  constructor(private http: HttpClient) { }

  getFormateur(): Observable<Formateur[]>{
    return this.http.get<Formateur[]>(apiurl+"api/formateur/listformateur").pipe();
  }

  getFormateurId(id:number): Observable<Formateur>{
    return this.http.get<Formateur>(apiurl+"api/formateur/unformateur/"+id).pipe();
  }

  addFormateur(formateur: Formateur) : Observable<Formateur>{
    return this.http.post<Formateur>(apiurl + "api/formateur/addformateur", formateur,httpOptions).pipe();
  }

  updateFormateur(formateur: Formateur) : Observable<Formateur>{
    return this.http.put<Formateur>(apiurl+"api/formateur/updateformateur", formateur,httpOptions).pipe();
  }

  deleteFormateur(id:number) : Observable<any>{
    return this.http.delete(apiurl+"api/formateur/deleteformateur/"+id).pipe();
  }

  linkSessionFormateur(id:number, session:Session): Observable<Formateur>{
    return this.http.put<Formateur>(apiurl+"api/formateur/session/"+id, session,httpOptions).pipe();
  }

  linkSpecialiteFormateur(id:number, specialite:Specialite): Observable<Formateur>{
    return this.http.put<Formateur>(apiurl+"api/formateur/specialite/"+id, specialite,httpOptions).pipe();
  }
}
