import { TestBed } from '@angular/core/testing';

import { TeamviewerService } from './teamviewer.service';

describe('TeamviewerService', () => {
  let service: TeamviewerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamviewerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
