import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardgridComponent } from './boardgrid.component';

describe('BoardgridComponent', () => {
  let component: BoardgridComponent;
  let fixture: ComponentFixture<BoardgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardgridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
