import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  mainTitle = 'Shelter';
  mainTitleText = '';
  mainLogoSrc = `https://www.fonts-online.ru/img_fonts.php?id=17752&t=${this.mainTitle}`;
  mainLogoHref = [];

  ngOnInit() {
  }

}
