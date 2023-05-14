import { MessagesService } from './messages.service';
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messagesService: MessagesService) { }
  getHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES);
    this.messagesService.add('HeroService: Fetched heroes')
    return heroes;
  }
}
