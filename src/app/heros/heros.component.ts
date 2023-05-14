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
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
    console.log(this.selectedHero);
    
  }
  constructor(private heroService: HeroService){}
  getHeros(): void{
     this.heroService.getHeroes()
     .subscribe(heroes => this.heroes = heroes);
  }
  ngOnInit(): void{
    this.getHeros();
  }
}
