import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { MapMarker } from './map-marker.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent {
  @Input() public markers: {
    zoom: number,
    coords: MapMarker[]
  };

  @Output() public markerSelection: EventEmitter<number> = new EventEmitter();

  public selectMarker(id) {
    this.markerSelection.emit(id);
  }

  public mapTrackBy(index: number, marker: MapMarker): number {
    return marker.id;
  }
}
