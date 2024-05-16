import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingTrattaComponent } from './loading-tratta.component';

describe('LoadingTrattaComponent', () => {
  let component: LoadingTrattaComponent;
  let fixture: ComponentFixture<LoadingTrattaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingTrattaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadingTrattaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
