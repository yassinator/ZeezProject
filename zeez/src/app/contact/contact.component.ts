import { ContactService } from '../services/contact.service';
import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 
  
  constructor(private contactService:ContactService,public dialog: MatDialog) {}
  
  contacts: any;
  contact={nom: '',prenom: '',dateDeNaissance: '',email: '',telephone: null,photo: ''};
  page =0;
  size=8;
  totalPages:any;
  pages : any;
  intTotalPages: number;
  currentPage=0;
  prenom:string;
  updateProcess=false;
  
  getAllcontacts() {
    this.contactService.toPage(this.page, this.size).
        subscribe(data=> {
             this.contacts=data.content;
          for (let contact of this.contacts) {
                contact['checked']=false; 
          }
             this.totalPages=data.totalElements/this.size;
             if (this.totalPages % this.size != 0) { this.totalPages++; }
             this.intTotalPages=Math.floor(this.totalPages);
             this.pages= new Array(Math.floor(this.totalPages));
        },   
                 err => {
                    console.log(err);
                 });
  
  }
  goToPage(i) {
    this.page=i-1;
    this.currentPage=i;
    this.getAllcontacts();
  }
  onSubmit(data) {
   this.contactService.addContact(data).subscribe(
        res => {
          console.log('Ajout contact avec succes ' + res);
          this.getAllcontacts();
        },
        err => {
          console.log('Error occured');
        }
      );
    console.log(data.nom);
    
  }
  
   changeCheckbox(i,c) {
      console.log('index==> '+i);
      console.log('element chechekd==> '+c.nom);
     
   this.updateProcess=!this.updateProcess;
     for (let contact of this.contacts) {
                contact['checked']=false; 
          }
     this.contacts[i].checked = !this.contacts[i].checked;
     
  }
   modifier(c){
     if (!this.updateProcess) { this.updateProcess=!this.updateProcess;}
     this.contact=c;
   }
  
  
  //modifier Contact
  update(){
    this.contactService.editContact(this.contact).subscribe(
        res => {
          console.log('Modification contact avec succes ' + res);
          this.getAllcontacts();
        },
        err => {
          console.log('Error occured');
        }
      );
  }
  

   openDialog(c): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose=true;
    
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '500px',
     data: { c ,nom:c.nom, prenom:c.prenom},disableClose:true
    });
   
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getAllcontacts();
//      this.animal = result;
    });
  }
  ngOnInit() {
    this.getAllcontacts();
  }

}

@Component({
  selector: 'dialog-overview',
  templateUrl: 'dialog-overview.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,private contactService:ContactService) { }
     
    //supprimer Contact
  supprimer(){
    this.contactService.deleteContact(this.data.c).subscribe(
        res => {
          console.log('Suppression contact avec succes ' + res);
          this.dialogRef.close();
        },
        err => {
          console.log('Error occured');
        }
      );
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

}
