import { Injectable } from '@angular/core';
import { sample1 } from './../data1';
import { RealEstateProperty } from '../models/RealEstateProperty';

@Injectable({ providedIn: 'root' })
export class PropertyService {
  data: RealEstateProperty[];

  constructor() {
    this.data = sample1
  }

  public getAll() {
    return this.data;
  }

  public getById(id: string): RealEstateProperty | undefined {
    return this.data.find(d => d.id == id);
  }

}
