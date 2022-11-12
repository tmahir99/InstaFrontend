import { Component, OnInit } from '@angular/core';
import {faHeart, faComment, faBookmark, faPaperPlane} from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name : string = 'username';
  faHeart = faHeart;
  faComment =faComment;
  faBookmark = faBookmark;
  faPaperPlane = faPaperPlane

}
