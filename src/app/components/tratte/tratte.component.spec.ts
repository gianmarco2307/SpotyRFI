import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TratteComponent } from './tratte.component';

describe('TratteComponent', () => {
  let component: TratteComponent;
  let fixture: ComponentFixture<TratteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TratteComponent]
    });
    fixture = TestBed.createComponent(TratteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
