import { Component } from '@angular/core';
import { Todo } from './shared/todo';
import { todos } from './shared/data';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.js']
})
export class AppComponent {
  title: string = 'Angular 2Do';
}
