import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ContactService {
constructor(private httpR:Http) { }


  getAllcontact() {
  return  this.httpR.get("http://localhost:8080/contacts")
     .map(resp => resp.json());
  }
  
 addContact(data) {
   console.log(data);
   return this.httpR.post('http://localhost:8080/contacts', data);
  }
  
 editContact(data) {
   console.log(data);
   return this.httpR.put('http://localhost:8080/contacts/'+data.id, data);
      
  }

 deleteContact(data) {
  return  this.httpR.delete("http://localhost:8080/contacts/"+data.id);
  }
  toPage( page: number ,size: number) {
  return  this.httpR.get("http://localhost:8080/paginationContact?page=" + page + "&size=" + size)
     .map(resp => resp.json());
  }

}
