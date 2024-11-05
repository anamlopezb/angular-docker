import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerPracticesComponent } from './manager-practices.component';

describe('ManagerPracticesComponent', () => {
  let component: ManagerPracticesComponent;
  let fixture: ComponentFixture<ManagerPracticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagerPracticesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerPracticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
