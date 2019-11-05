import { TestBed } from '@angular/core/testing';
import { QuestService } from './quest.service';

xdescribe('QuestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: QuestService = TestBed.get(QuestService);
    expect(service).toBeTruthy();
  });
});
