import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalReportTecComponent } from './final-report-tec.component';

describe('FinalReportTecComponent', () => {
  let component: FinalReportTecComponent;
  let fixture: ComponentFixture<FinalReportTecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalReportTecComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalReportTecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
