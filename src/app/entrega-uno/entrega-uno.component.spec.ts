import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregaUnoComponent } from './entrega-uno.component';

describe('EntregaUnoComponent', () => {
  let component: EntregaUnoComponent;
  let fixture: ComponentFixture<EntregaUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntregaUnoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntregaUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
