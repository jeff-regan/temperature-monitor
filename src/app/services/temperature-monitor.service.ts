import { Injectable } from '@angular/core';

@Injectable()
export class TemperatureMonitorService {
  temps: number[] = [];

  constructor() { }

  recordTemperature(item: number) {
    this.temps.push(item);
  }

  deleteTemperature(index: number) {
    this.temps.splice(index, 1);
  }

  getTemps() {
    return this.temps.slice();
  }

  getCurrentMedian() {
    return this.calcMedian(this.temps);
  }

  calcMedian(tempArray: number[]) {
    let temp = tempArray.slice().sort((a, b) => { return a - b; });

    const midPoint = Math.floor(tempArray.length / 2);
    if (temp.length % 2 === 0) {
      return (temp[midPoint - 1] + temp[midPoint]) / 2.0;
    } else {
      return temp[midPoint];
    }
  }
}
