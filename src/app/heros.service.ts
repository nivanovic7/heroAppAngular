import { Injectable } from '@angular/core';
import { HEROES } from './mock-heros';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HerosService {

  url : string= 'api/heroes'
  constructor(private messageService: MessageService, private http: HttpClient) {
   }

   getHeros():Observable<Hero[]>{
    this.messageService.addMessage("Fetched Heroes!")
    return this.http.get<Hero[]>(this.url).pipe(
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
   }

   getHero(id: number): Observable<Hero>{
    return this.http.get<Hero>(`${this.url}/${id}`);
   }

   updateHero(id: number, name: string){
    // this.http.put(`${this.url}/${id}`)
   }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.addMessage(`HeroService: ${message}`);
  }
}


