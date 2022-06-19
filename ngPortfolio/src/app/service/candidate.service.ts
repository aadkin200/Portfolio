import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, throwError } from 'rxjs';
import { Candidate } from '../model/candidate';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  url = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public getCandidate(canId: any) {
    return this.http.get<Candidate>(`${this.url}/candidate/${canId}`).pipe(
      catchError((err: any) => {
        console.error('candidate service getCandidate() error');
        return throwError(err);
      })
    )
  }
}
