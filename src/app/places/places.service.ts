import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York City.',
      'https://p1.pxfuel.com/preview/601/308/987/mansion-house-architecture-residence-luxury-royalty-free-thumbnail.jpg',
      149.99
    ),
    new Place(
      'p2',
      "L'Amour Toujours",
      'A romantic place in Paris',
      'https://p0.pxfuel.com/preview/201/662/452/city-and-urban-paris-royalty-free-thumbnail.jpg',
      189.99
    ),
    new Place(
      'p3',
      'The Foggy Palace',
      'Not your average city trip',
      'https://p1.pxfuel.com/preview/417/606/402/bridge-fog-foggy-nature-outdoors-trees-royalty-free-thumbnail.jpg',
      99.99
    ),
  ];

  get place() {
    return [...this._places];
  }

  constructor() {}

  getPlace(id: string) {
    return { ...this._places.find((p) => p.id === id) };
  }
}
