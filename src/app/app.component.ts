import { Component, OnInit, Output } from '@angular/core';
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
      'temperature': new FormControl(temperature, [
        Validators.required,
        Validators.pattern(/^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/)
      ])
    });
    this.temps = this.tmService.getTemps();
  }

  onGetMedian() {
    this.medianValue = this.tmService.getCurrentMedian();
  }

  onSubmit() {
    this.tmService.recordTemperature(parseFloat(this.temperatureForm.value['temperature']));
    this.temps = this.tmService.getTemps();
    this.temperatureForm.reset();
  }
}
