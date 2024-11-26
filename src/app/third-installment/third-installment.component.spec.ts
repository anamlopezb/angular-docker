import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdInstallmentComponent } from './third-installment.component';

describe('ThirdInstallmentComponent', () => {
  let component: ThirdInstallmentComponent;
  let fixture: ComponentFixture<ThirdInstallmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirdInstallmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdInstallmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
