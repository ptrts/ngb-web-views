import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './home.html'
})
export class TestViewComponent  {
  model = {
    left: true,
    middle: false,
    right: false
  };
}
