import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'proyectoFerreteria';
  mostrarNavBar: boolean;
  mostrarLoginOption : boolean = false;

  constructor(private router: Router) {
    this.mostrarNavBar = true;

    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.mostrarNavBar = !event.url.includes('/login');
      }
    });
  }
  
  ngOnInit() {
    this.mostrarLoginOption  = true;

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.mostrarLoginOption = !event.url.includes('/login');
      }
    });
  }

}
