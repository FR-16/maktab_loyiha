import { TestBed } from '@angular/core/testing';

import { StatestorageService } from './statestorage.service';

describe('StatestorageService', () => {
  let service: StatestorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatestorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
