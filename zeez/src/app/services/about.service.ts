import { Injectable } from '@angular/core';

@Injectable()
export class AboutService {
 inforomation = {
    nom: 'TAHIRI',
    prenom: 'YASSINE',
    tele: 605915340,
    email: 'yassine.tahiri08@gmail.com'
    };
  comments = [
  {date: new Date(), message: 'commenataire 1 '},
  {date: new Date(), message: 'commenataire 2 '},
  {date: new Date(), message: 'commenataire 3 '}
  ];
  commentaire = {date: new Date, message : ''};
  
  ajouterComment(c){
    this.comments.push(c);
  }
  getInfo(){
    return this.inforomation;
  }
   getAllcomments(){
    return this.comments;
  }
  constructor() { }

}
