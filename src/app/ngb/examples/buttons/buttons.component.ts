import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './buttons.component.html'
})
export class ButtonsComponent  {
  model = {
    left: true,
    middle: false,
    right: false
  };
}
