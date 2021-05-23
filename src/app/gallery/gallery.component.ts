import {
  Component,
  OnInit
} from "@angular/core";


@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.css"],
})
export class GalleryComponent implements OnInit {

  data: Array<any> = [
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
  ];

  items: { image: string; thumbImage: string; title: string; alt: string; }[];

  constructor() {}

  ngOnInit() {
    this.items = this.data.map((item) => {
      return{
      image: item.image.source,
      thumbImage: item.image.source,
      title: item.name,
      alt: item.image.alt
    }
  })
  }

  



}







