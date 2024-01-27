import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordBoxComponent } from './word-box.component';

describe('WordBoxComponent', () => {
  let component: WordBoxComponent;
  let fixture: ComponentFixture<WordBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WordBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
