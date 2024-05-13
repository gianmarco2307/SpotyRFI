import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrattaCardComponent } from './tratta-card.component';

describe('TrattaCardComponent', () => {
  let component: TrattaCardComponent;
  let fixture: ComponentFixture<TrattaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrattaCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrattaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
