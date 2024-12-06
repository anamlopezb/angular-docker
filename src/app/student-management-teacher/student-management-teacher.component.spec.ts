import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentManagementTeacherComponent } from './student-management-teacher.component';

describe('StudentManagementTeacherComponent', () => {
  let component: StudentManagementTeacherComponent;
  let fixture: ComponentFixture<StudentManagementTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentManagementTeacherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentManagementTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
