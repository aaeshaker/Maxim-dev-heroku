import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'maxim-dev-frontend';

  onActivate(event: Event) {
    window.scroll(0, 0);
  }

}
