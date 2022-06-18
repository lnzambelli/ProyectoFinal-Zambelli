import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  nombreUsuario: string =""

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.nombreUsuario = sessionStorage.getItem('usuario') || "";
  }

}
