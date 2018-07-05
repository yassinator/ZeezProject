import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class GalleryService {

    constructor(private httpR:Http) { }

  search(motCle: string, pages: number ,current: number ) {
  return  this.httpR.get("https://pixabay.com/api/?key=9163733-f9903fa9d8056f7a73a9762af&q" +
      "=" + motCle + "&per_page=" + pages + "&page="+current )
     .map(resp => resp.json());
  }

  toPage(motCle: string, pages: number ,current: number) {
  return  this.httpR.get("https://pixabay.com/api/?key=9163733-f9903fa9d8056f7a73a9762af&q" +
      "=" + motCle + "&per_page=" + pages + "&page="+current )
     .map(resp => resp.json());
  }

}
