import { TestBed } from '@angular/core/testing';

import { EternalQuizService } from './eternal-quiz.service';

describe('NewQuizService', () => {
  let service: EternalQuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EternalQuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
