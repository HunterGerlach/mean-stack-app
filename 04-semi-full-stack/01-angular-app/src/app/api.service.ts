import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  getHealthCheck(): Observable<any> {
    return this.http.get(`${environment.apiBaseUrl}/health`)
      .pipe(
        catchError(this.handleError.bind(this)) // Bind 'this' to ensure we can access the class context
      );
  }

  private handleError(error: HttpErrorResponse) {
    // Log the error to the console
    console.error('Error occurred making HTTP call:', error);

    // Inspect the HTTP response status code
    if (error.status === 0) {
      // A network error occurred (CORS, offline, etc.)
      console.error('Client-side network error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code
      console.error(`Backend returned status code ${error.status}:`, error.error);
    }

    // Inspect the error response body
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred
      console.error('Client-side error:', error.error.message);
    } else {
      // The backend returned an error response
      console.error('Server-side error body:', error.error);
    }

    // Return an observable with a user-facing error message
    return of({ status: 'Failed to connect to server', error: true });
  }
}
