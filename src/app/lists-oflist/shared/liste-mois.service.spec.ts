import { TestBed, inject } from '@angular/core/testing';

import { ListeMoisService } from './liste-mois.service';

describe('ListeMoisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListeMoisService]
    });
  });

  it('should be created', inject([ListeMoisService], (service: ListeMoisService) => {
    expect(service).toBeTruthy();
  }));
});
