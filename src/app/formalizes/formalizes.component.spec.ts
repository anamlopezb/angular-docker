import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormalizesComponent } from './formalizes.component';

describe('FormalizesComponent', () => {
  let component: FormalizesComponent;
  let fixture: ComponentFixture<FormalizesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormalizesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormalizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
