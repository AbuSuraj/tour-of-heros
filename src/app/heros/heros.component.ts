import { MessagesService } from './../messages.service';
import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})

export class HerosComponent {
  // heroes = HEROES;
  heroes : Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService, private messageService: MessagesService){}
  
  ngOnInit(): void{
    this.getHeros();
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
    console.log(this.selectedHero); 
    this.messageService.add(`HeroesComponent: selected hero id = ${hero.id}`);
  }
 
  getHeros(): void{
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}
