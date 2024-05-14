import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTileComponent } from './main-tile.component';

describe('MainTileComponent', () => {
  let component: MainTileComponent;
  let fixture: ComponentFixture<MainTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainTileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
