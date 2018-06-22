import { TestBed, inject } from '@angular/core/testing';

import { NgxStickyModalService } from './ngx-sticky-modal.service';

describe('NgxStickyModalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxStickyModalService]
    });
  });

  it('should be created', inject([NgxStickyModalService], (service: NgxStickyModalService) => {
    expect(service).toBeTruthy();
  }));
});
