import { Component, OnInit } from '@angular/core';
import { HerosService } from '../heros.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit{

  constructor(private HeroService: HerosService) {}

  heros: Hero[] = [];

  ngOnInit(): void {
   this.HeroService.getHeros().subscribe(heros => this.heros = heros);
  }
}
