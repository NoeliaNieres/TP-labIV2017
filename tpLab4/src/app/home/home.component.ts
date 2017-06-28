import { Component, OnInit } from '@angular/core';
import {} from '@types/googlemaps';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
        var mapProp = {
            center: new google.maps.LatLng(-34.614456, -58.375962),
            zoom:16,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
        var marker = new google.maps.Marker({position:new google.maps.LatLng(-34.6161772, -58.373127599999975),map:map,title:"You are here!"});
       
        var mapProp1 = {
            center: new google.maps.LatLng(-34.59849, -58.439777),
            zoom:16,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        };
        var map1 = new google.maps.Map(document.getElementById("googleMap1"), mapProp1);
        var marker = new google.maps.Marker({position:new google.maps.LatLng(-34.6006889, -58.435900000000004),map:map1,title:"You are here!"});
   
        var mapProp2 = {
            center: new google.maps.LatLng(-34.605272 , -58.425443),
            zoom:16,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        };
        var map2 = new google.maps.Map(document.getElementById("googleMap2"), mapProp2);
        var marker = new google.maps.Marker({position:new google.maps.LatLng(-34.6084369,-58.42066999999997),map:map2,title:"You are here!"});

         
    }

}
