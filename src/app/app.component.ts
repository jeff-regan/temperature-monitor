import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TemperatureMonitorService } from './services/temperature-monitor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Temperature Monitor';
  upperLimit: number = 8;
  temperatureForm: FormGroup;
  temps: number[] = [];
  medianValue: number;

  constructor(private tmService: TemperatureMonitorService) {}

  ngOnInit() {
    let temperature = null;

    this.temperatureForm = new FormGroup({
      'temperature': new FormControl(temperature, Validators.required)
    });
    this.temps = this.tmService.getTemps();
  }

  onGetMedian() {
    let medianVal = this.tmService.getCurrentMedian();
    document.querySelector('#median-display').innerHTML = medianVal.toString();
  }

  onSubmit() {
    let pgElt = document.querySelector('#progress-bar');

    this.tmService.recordTemperature(this.temperatureForm.value['temperature']);
    this.temps = this.tmService.getTemps();
    pgElt.setAttribute('style', 'width:' + (this.temps.length/this.upperLimit)*100 + '%');
    if (this.temps.length === this.upperLimit) {
      pgElt.innerHTML = 'Temperature Array is Full';
    } else {
      pgElt.innerHTML = '';
    }

    this.temperatureForm.reset();
  }
}
