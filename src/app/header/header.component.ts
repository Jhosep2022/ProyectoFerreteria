import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  mostrarLoginOption: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {
    if (this.router.url === '/home') {
      this.mostrarLoginOption = false;
    }
  }
}
