import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';

  loaded = false;

  data = {
    x: 10
  };

  constructor(private zone: NgZone) {
    this.load();

    // HACK to share zone with child widget
    (window as any).zone = zone;
  }

  private load() {
    const script = document.createElement('script');
    script.src = 'assets/main.js';
    document.body.append(script);
    script.onload = () => {
      this.loaded = true;
    };
  }

  inc() {
    this.data.x++;
  }

}
