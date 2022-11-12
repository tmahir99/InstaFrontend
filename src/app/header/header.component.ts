import { Component, OnInit } from '@angular/core';
import {faFacebookMessenger, faSafari} from '@fortawesome/free-brands-svg-icons'
import {faHome, faPlusSquare, faHeart} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  faFacebookMessenger =faFacebookMessenger;
  faSafari = faSafari;
  faHome =faHome;
  faPlusSquare = faPlusSquare;
  faHeart = faHeart;

  logoImg : string = "assets/img/instaLogo.png";
}
