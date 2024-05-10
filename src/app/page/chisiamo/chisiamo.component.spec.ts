import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChisiamoComponent } from './chisiamo.component';

describe('ChisiamoComponent', () => {
  let component: ChisiamoComponent;
  let fixture: ComponentFixture<ChisiamoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChisiamoComponent]
    });
    fixture = TestBed.createComponent(ChisiamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
