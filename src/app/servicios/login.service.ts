import { Injectable } from '@angular/core';
import { from, throwError, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { retry, catchError } from  'rxjs/operators';

import { Usuario } from '../Models/usuario-model';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private api = 'http://localhost:8080/RestUC/services';

  data = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  userplay(usuario): Observable<Usuario>
  {
    const path= `${this.api}/cursosuc/ValidaIngreso`;
    console.log('Url consumo'+ path);
    return this.httpClient
    .post<Usuario>(path,JSON.stringify(usuario),this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  forgetmail(usuario): Observable <Usuario>
  {
    const path= `${this.api}/cursosuc/recupContrasena`;
    console.log('Url consumo'+ path);
    return this.httpClient
    .post<Usuario>(path,JSON.stringify(usuario),this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  getUser(usuario): Observable<Usuario>
  {
    const path= `${this.api}/cursosuc/getUsuario`;
    console.log('Url consumo'+ path);
    return this.httpClient
    .post<Usuario>(path,JSON.stringify(usuario),this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
}
