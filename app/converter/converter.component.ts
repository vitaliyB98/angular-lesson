import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'converter',
  templateUrl: 'converter.component.html',
  styleUrls: ['converter.component.css']
})

export class ConverterComponent {
  convert_to: number = 0;

  convert_option: object = [];

  const convert_options = [
    {
      id: 'km_to_mi',
      from_title: 'Km',
      to_title: 'Mi',
      value: 0.621,
      operation: '*'
    },
    {
      id: 'mi_to_km',
      from_title: 'Mi',
      to_title: 'Km',
      value: 1.621,
      operation: '*'
    }
  ];

  convertFrom(convert_from: number, convert_id: any) {
    if (typeof convert_id == 'undefined') {
      convert_id = 'km_to_mi';
    }

    this.convert_option = this.convert_options.find(convert_option => convert_option.id == convert_id);
    switch (this.convert_option.operation) {
      case '*':
        this.convert_to = convert_from * this.convert_option.value;
        break;
      case '/':
        this.convert_to = convert_from / this.convert_option.value;
        break;
      default:
        this.convert_to = 0;
    }
    this.convert_to = this.convert_to.toFixed(2);
  }
}
