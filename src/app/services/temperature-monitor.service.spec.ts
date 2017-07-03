import { TestBed, inject } from '@angular/core/testing';

import { TemperatureMonitorService } from './temperature-monitor.service';

describe('TemperatureMonitorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TemperatureMonitorService]
    });
  });

  it('should be created', inject([TemperatureMonitorService], (service: TemperatureMonitorService) => {
    expect(service).toBeTruthy();
  }));

  it('should calculate the median of [5, 1, -7, 7, 8, 3]', () => {
    let temperatureMonitorService = new TemperatureMonitorService();
    expect(temperatureMonitorService.calcMedian([5, 1, -7, 7, 8, 3])).toEqual(4);
  });

  it('should calculate the median of [5, 1, -7, 7, 8, 3, 9]', () => {
    let temperatureMonitorService = new TemperatureMonitorService();
    expect(temperatureMonitorService.calcMedian([5, 1, -7, 7, 8, 3, 9])).toEqual(5);
  });

});
