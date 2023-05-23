import { TestBed } from '@angular/core/testing';

import { ComprobantesService } from './comprobantes.service';

describe('ComprobantesService', () => {
  let service: ComprobantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComprobantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
