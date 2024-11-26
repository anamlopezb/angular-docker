import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstDeliveryComponent } from './first-delivery.component';

describe('FirstDeliveryComponent', () => {
  let component: FirstDeliveryComponent;
  let fixture: ComponentFixture<FirstDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstDeliveryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
