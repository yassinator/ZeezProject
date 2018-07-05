import { GalleryService } from '../services/gallery.service';
import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { nextTick } from 'q';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  motcle: any;
  currentPage = 1;
  size = 10;
  pagePhotos: any;
  Photopages: any;
  totalPages=0;
  pages:any;
  intTotalPages:number;
  constructor(private galleryService:GalleryService ) {}
 
  onSerach(){
    this.galleryService.search(this.motcle,this.size,this.currentPage).subscribe(data=>{
      console.log("===========>"+this.motcle);
      console.log(data);
      this.pagePhotos=data;
      this.totalPages=data.totalHits/this.size;
      if (data.totalHits % this.size != 0) this.totalPages++;
      this.intTotalPages=Math.floor(this.totalPages);
      this.pages= new Array(Math.floor(this.totalPages));
    });
    
  }

  goToPage(i){
    this.currentPage=i;
    this.onSerach();
  }
  

  ngOnInit() {
  }

}
