import { Injectable } from '@angular/core';
import { HEROES } from './mock-heros';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HerosService {

  url : string= 'api/heroes'
  constructor(private messageService: MessageService, private http: HttpClient) {
   }

   getHeros():Observable<Hero[]>{
    this.messageService.addMessage("Fetched Heroes!")
    return this.http.get<Hero[]>(this.url)
   }

   getHero(id: number): Observable<Hero>{
    return this.http.get<Hero>(`${this.url}/${id}`);
   }

   updateHero(id: number, name: string){
    this.messageService.addMessage("Hero updated!")
   }
}
