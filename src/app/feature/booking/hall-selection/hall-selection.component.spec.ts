import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HallSelectionComponent } from './hall-selection.component';

describe('HallSelectionComponent', () => {
  let component: HallSelectionComponent;
  let fixture: ComponentFixture<HallSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HallSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HallSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
