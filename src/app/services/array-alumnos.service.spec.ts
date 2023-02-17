import { TestBed } from '@angular/core/testing';

import { ArrayAlumnosService } from './array-alumnos.service';

describe('ArrayAlumnosService', () => {
  let service: ArrayAlumnosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArrayAlumnosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
