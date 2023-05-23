import { TestBed } from '@angular/core/testing';

import { DatosContribuyentesService } from './datos-contribuyentes.service';

describe('DatosContribuyentesService', () => {
  let service: DatosContribuyentesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosContribuyentesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
