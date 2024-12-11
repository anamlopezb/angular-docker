import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingConsultationComponent } from './teaching-consultation.component';

describe('TeachingConsultationComponent', () => {
  let component: TeachingConsultationComponent;
  let fixture: ComponentFixture<TeachingConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeachingConsultationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeachingConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
