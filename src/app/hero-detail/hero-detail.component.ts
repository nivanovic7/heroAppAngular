import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HerosService } from '../heros.service';
import { Hero } from '../hero';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit{


heroId: number;
hero: Hero;

constructor(private route: ActivatedRoute, private heroService: HerosService, private location: Location){}

  ngOnInit(): void {
   this.heroId = +this.route.snapshot.params['id'];
   this.heroService.getHero(this.heroId).subscribe(hero => this.hero = hero);
  }

  goBack(){
    this.location.back();
  }

  saveHero(name:string){
    this.heroService.updateHero(this.heroId, name);

  }
}

