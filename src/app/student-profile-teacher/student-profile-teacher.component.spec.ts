import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProfileTeacherComponent } from './student-profile-teacher.component';

describe('StudentProfileTeacherComponent', () => {
  let component: StudentProfileTeacherComponent;
  let fixture: ComponentFixture<StudentProfileTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentProfileTeacherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentProfileTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
