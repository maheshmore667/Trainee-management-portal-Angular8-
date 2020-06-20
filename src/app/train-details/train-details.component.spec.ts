import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainDetailsComponent } from './train-details.component';

describe('TrainDetailsComponent', () => {
  let component: TrainDetailsComponent;
  let fixture: ComponentFixture<TrainDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
