import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingDetailsComponent } from './teaching-details.component';

describe('TeachingDetailsComponent', () => {
  let component: TeachingDetailsComponent;
  let fixture: ComponentFixture<TeachingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeachingDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeachingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
