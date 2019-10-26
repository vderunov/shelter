import { TestBed } from '@angular/core/testing';

import { UrlParamCreatorService } from './url-param-creator.service';

describe('UrlParamCreatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UrlParamCreatorService = TestBed.get(UrlParamCreatorService);
    expect(service).toBeTruthy();
  });

  it('should create from object string with params for url', () => {
    const service: UrlParamCreatorService = TestBed.get(UrlParamCreatorService);
    expect(service.createUrlSearchParam({'name': 'searchValue', 'address': 'someAddress'})).toBe('?name=searchValue?address=someAddress');
  });
});
