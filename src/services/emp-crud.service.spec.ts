import { TestBed } from '@angular/core/testing';

import { EmpCRUDService } from './emp-crud.service';

describe('EmpCRUDService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpCRUDService = TestBed.get(EmpCRUDService);
    expect(service).toBeTruthy();
  });
});
