import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'widget';
  _input: any;

  @Input() set input(value: string) {
    console.debug('set input', value);
    this._input = value;
  }

}
