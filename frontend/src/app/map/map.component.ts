import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import {MarkerService} from "../marker.service";
import { TOKEN_NAME } from "../auth.service";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private marker:MarkerService) {

    this.visible = localStorage.getItem(TOKEN_NAME) == null;
    console.log(localStorage.getItem(TOKEN_NAME));
  }

  ngOnInit() {
  }

  visible: boolean;
  zoom: number = 16;

  // initial center position for the map
  lat: number = 46.482806;
  lng: number = 30.736329;

  mapClicked($event: MouseEvent) {
    console.log(this.markers);
    this.markers.add({
      lat: $event.coords.lat,
      lng: $event.coords.lng
    });
  }

  removeMarker(lt, lg) {
    this.markers.forEach(marker => {
      if (marker.lat == lt && marker.lng == lg)
        this.markers.delete(marker);
    });
    console.log(this.markers);
  }

  createMarkers() {
    this.marker.getMarkers().then(
      markers => {
        markers.forEach((m) => {
          this.markers.add(m);
        }, this);
      }
    );
  }

  sendMarkers() {
    console.log(this.markers);
    this.marker.saveMarkers(Array.from(this.markers))
      .catch(err => console.log(err));
  }

  markers = new Set();
}
