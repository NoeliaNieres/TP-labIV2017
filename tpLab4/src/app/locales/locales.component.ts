import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locales',
  templateUrl: './locales.component.html',
  styleUrls: ['./locales.component.css']
})
export class LocalesComponent implements OnInit {

  constructor() { }

 ngOnInit() {
  
    let myLatlng = new google.maps.LatLng(-34.614456, -58.375962);
    var mapProp = {
            center: myLatlng,
            zoom:16,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
        let marker = new google.maps.Marker({ 
        draggable: true,
        animation: google.maps.Animation.DROP,
          position: myLatlng,
          map: map,
            title:"You are here!"
          });
      //------------------------------------------------------------------------------/// 
        let myLatlng1 = new google.maps.LatLng(-34.59849, -58.439777);
        var mapProp1 = {
            center: myLatlng1,
            zoom:16,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        };
        var map1 = new google.maps.Map(document.getElementById("googleMap1"), mapProp1);
        let marker1 = new google.maps.Marker({ 
        draggable: true,
        animation: google.maps.Animation.DROP,
          position: myLatlng1,
          map: map1,
            title:"You are here!"
          });
        //------------------------------------------------------------------------------/// 
        let myLatlng2 = new google.maps.LatLng(-34.605272 , -58.425443);
        var mapProp2 = {
            center: myLatlng2,
            zoom:16,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        };
        var map2 = new google.maps.Map(document.getElementById("googleMap2"), mapProp2);
        let marker2 = new google.maps.Marker({ 
        draggable: true,
        animation: google.maps.Animation.DROP,
          position: myLatlng2,
          map: map2,
            title:"You are here!"
          });
        
  }

}
