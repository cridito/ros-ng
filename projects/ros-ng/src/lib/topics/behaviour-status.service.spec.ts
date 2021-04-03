import { TestBed } from '@angular/core/testing';

import { BehaviourStatusService } from './behaviour-status.service';

describe('BehaviourStatusService', () => {
  let service: BehaviourStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BehaviourStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
