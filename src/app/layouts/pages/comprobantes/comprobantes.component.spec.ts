import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprobantesComponent } from './comprobantes.component';

describe('ComprobantesComponent', () => {
  let component: ComprobantesComponent;
  let fixture: ComponentFixture<ComprobantesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComprobantesComponent]
    });
    fixture = TestBed.createComponent(ComprobantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
