import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondInstallmentComponent } from './second-installment.component';

describe('SecondInstallmentComponent', () => {
  let component: SecondInstallmentComponent;
  let fixture: ComponentFixture<SecondInstallmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondInstallmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondInstallmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
