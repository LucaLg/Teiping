import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeRadioComponent } from './time-radio.component';

describe('TimeRadioComponent', () => {
  let component: TimeRadioComponent;
  let fixture: ComponentFixture<TimeRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeRadioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimeRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
