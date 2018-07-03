import { TestBed, inject } from '@angular/core/testing';

import { AuthControlService } from './auth-control.service';

describe('AuthControlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthControlService]
    });
  });

  it('should be created', inject([AuthControlService], (service: AuthControlService) => {
    expect(service).toBeTruthy();
  }));
});
