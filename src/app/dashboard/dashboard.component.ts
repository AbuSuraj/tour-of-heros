import { HeroService } from './../hero.service';
import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  heroes: Hero[] = [];
  constructor(private heroService: HeroService){}
  ngOninit(): void{
    this.getHeroes();
  }
  getHeroes(){
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes.slice(1,5))
  }
}
