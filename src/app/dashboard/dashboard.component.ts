import { Component, OnInit } from '@angular/core';
import { HerosService } from '../heros.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  topHeros: Hero[] = [];

  constructor(private HeroService: HerosService){}

  ngOnInit(): void {
    this.HeroService.getHeros().subscribe(heros => this.topHeros = heros.slice(1,5));
  }
}
