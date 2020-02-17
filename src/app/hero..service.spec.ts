import { TestBed } from '@angular/core/testing';

import { Hero.Service } from './hero..service';

describe('Hero.Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Hero.Service = TestBed.get(Hero.Service);
    expect(service).toBeTruthy();
  });
});
