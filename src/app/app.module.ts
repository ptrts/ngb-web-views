import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import {AppComponent} from './app.component';
import {ButtonsComponent} from './ngb/examples/buttons/buttons.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  declarations: [
    // AppComponent,
    ButtonsComponent,
  ],
  bootstrap: [ButtonsComponent]
})
export class AppModule {
}
