import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Gallery,GalleryItem,ThumbnailsPosition,ImageSize } from "ng-gallery";


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  items: GalleryItem[] = [];
  @ViewChild("itemTemplate", { static: true })
  itemTemplate!: TemplateRef<any>;

  data = [
    {
      "galleryImages": [
        {
          "name": "Grow Food For Free",
          "image": {
            "alt": "image_one",
            "source": "https://res.cloudinary.com/dk-hub/image/upload/q_75,c_limit,f_auto,w_1940,h_1532/dk-core-nonprod/9780241411995/9780241411995_cover.jpg"
          }
        },
        {
          "name": "Huw's Journal",
          "image": {
            "alt": "image_two",
            "source": "https://res.cloudinary.com/dk-hub/image/upload/q_75,c_limit,f_auto,w_1940,h_1532/dk-core-nonprod/9780241411995/9780241411995_spread_1.jpg"
          }
        },
        {
          "name": "Introduction",
          "image": {
            "alt": "image_three",
            "source": "https://res.cloudinary.com/dk-hub/image/upload/q_75,c_limit,f_auto,w_1940,h_1532/dk-core-nonprod/9780241411995/9780241411995_spread_2.jpg"
          }
        },
        {
          "name": "Budget Compost Bin Solutions",
          "image": {
            "alt": "image_three",
            "source": "https://res.cloudinary.com/dk-hub/image/upload/q_75,c_limit,f_auto,w_1940,h_1532/dk-core-nonprod/9780241411995/9780241411995_spread_3.jpg"
          }
        }
      ]
    }
  ]
  
  imageData = this.data[0].galleryImages;

  constructor() { }

  ngOnInit(){
     this.items = this.imageData.map(item => {
      return {
        type: "imageViewer",
        data: {
          src: item.image.source,
          thumb: item.image.alt
        }
      };
    });
  }

  

}
