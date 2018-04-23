import { TestBed, inject } from '@angular/core/testing';

import { EnvelopesService } from './envelopes.service';

describe('EnvelopesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnvelopesService]
    });
  });

  it('should be created', inject([EnvelopesService], (service: EnvelopesService) => {
    expect(service).toBeTruthy();
  }));
});
