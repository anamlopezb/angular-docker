import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentHeadboardComponent } from './student-headboard.component';

describe('StudentHeadboardComponent', () => {
  let component: StudentHeadboardComponent;
  let fixture: ComponentFixture<StudentHeadboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentHeadboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentHeadboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
