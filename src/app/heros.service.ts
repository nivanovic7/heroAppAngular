import { Injectable } from '@angular/core';
import { HEROES } from './mock-heros';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HerosService {

  constructor(private messageService: MessageService) {
   }

   getHeros():Observable<Hero[]>{
    this.messageService.addMessage("Fetched Heroes!")
    return of(HEROES);
   }

   getHero(id: number): Hero{
    this.messageService.addMessage("Fetched Hero Detail!")
    const [hero] = HEROES.filter(hero => hero.id === id)
    return hero;
   }

   updateHero(id: number, name: string){
    this.messageService.addMessage("Hero updated!")
   }
}
