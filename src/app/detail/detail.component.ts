import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RealEstateProperty } from '../models/RealEstateProperty';
import { PropertyService } from '../services/property.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit {
  item: RealEstateProperty | undefined;
  constructor(private activatedRoute: ActivatedRoute, private propertyService: PropertyService) {
  }
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.item = this.propertyService.getById(id);
  }
}
