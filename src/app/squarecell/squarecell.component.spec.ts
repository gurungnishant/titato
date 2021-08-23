import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquarecellComponent } from './squarecell.component';

describe('SquarecellComponent', () => {
  let component: SquarecellComponent;
  let fixture: ComponentFixture<SquarecellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquarecellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquarecellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
