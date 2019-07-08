import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Specialite } from '../model/specialiteModel';


const httpOptions = {
  headers: new HttpHeaders({'Content-type':'application/json'})
};

const apiurl = "http://localhost:8080/SpringMVC/";

@Injectable({
  providedIn: 'root'
})
export class SpecialiteService {

  constructor(private http: HttpClient) { }

  getSpecialite(): Observable<Specialite[]>{
    return this.http.get<Specialite[]>(apiurl+"api/specialite/listspe").pipe();
  }

  getSpecialiteId(id:number): Observable<Specialite>{
    return this.http.get<Specialite>(apiurl+"api/specialite/unespecialite/"+id).pipe();
  }

  addSpecialite(specialite: Specialite) : Observable<Specialite>{
    return this.http.post<Specialite>(apiurl + "api/specialite/addspecialite", specialite,httpOptions).pipe();
  }

  updateSpecialite(specialite: Specialite) : Observable<Specialite>{
    return this.http.put<Specialite>(apiurl+"api/specialite/updatespecialite", specialite,httpOptions).pipe();
  }

  deleteSpecialite(id:number) : Observable<any>{
    return this.http.delete(apiurl+"api/specialite/deletespecialite/"+id).pipe();
  }
}
