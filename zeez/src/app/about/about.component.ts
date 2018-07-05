import { AboutService } from '../services/about.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  commentaire = {date: new Date, message: ''};
  information = this.aboutService.getInfo();
  comments = this.aboutService.getAllcomments();
 constructor(private aboutService: AboutService) {
   
 }
  
 
  AddComment() {
    this.aboutService.ajouterComment(this.commentaire);
    this.commentaire = {date: new Date, message: ''};
  }
  ngOnInit() {
  }

}
