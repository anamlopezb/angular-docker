import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGeneralSchemeComponent } from './form-general-scheme.component';

describe('FormGeneralSchemeComponent', () => {
  let component: FormGeneralSchemeComponent;
  let fixture: ComponentFixture<FormGeneralSchemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormGeneralSchemeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormGeneralSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
