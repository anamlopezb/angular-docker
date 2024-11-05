import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationPracticesComponent } from './registration-practices.component';

describe('RegistrationPracticesComponent', () => {
  let component: RegistrationPracticesComponent;
  let fixture: ComponentFixture<RegistrationPracticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationPracticesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationPracticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
