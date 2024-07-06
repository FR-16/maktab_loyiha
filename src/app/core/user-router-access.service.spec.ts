import { TestBed } from '@angular/core/testing';

import { UserRouterAccessService } from './user-router-access.service';

describe('UserRouterAccessService', () => {
  let service: UserRouterAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRouterAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
