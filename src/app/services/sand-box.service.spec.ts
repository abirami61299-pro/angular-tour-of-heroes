import { TestBed } from '@angular/core/testing';

import { SandBoxService } from './sand-box.service';

describe('SandBoxService', () => {
  let service: SandBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SandBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
