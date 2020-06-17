import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class EventService {
  options = {
    headers: new HttpHeaders({
      'X-Auth-Token': '18b76b518ee04b339f9b76165eb0b9b4'
    })
  };
  constructor(private http: HttpClient) {
  }
  getEvents(): Observable<any> {
    console.log('hi service')
    return this.http.get<any>('https://api.football-data.org/v2/teams/86/matches?status=SCHEDULED', this.options)
      .pipe(catchError(this.handleError<any[]>('getEvents', [])))
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T)
    }
  }

  makeNewPrediction(data) {
    userPredicions.push(data)
    console.log('make new pre service', userPredicions)
  }

  getUserPredictions() {
    return userPredicions
  }

  getEvent(id: number): Observable<any> {
    console.log('getEvent')
    return this.http.get<any>('https://api.football-data.org/v2/matches/' + id, this.options)
      .pipe(catchError(this.handleError<any>('getEvent')))
  }

}

const userPredicions = [


]
