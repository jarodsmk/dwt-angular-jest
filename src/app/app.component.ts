import { Component } from '@angular/core';
import Dynamsoft from 'dwt';
import { WebTwain } from 'dwt/dist/types/WebTwain';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  thisBreaks: WebTwain = Dynamsoft.DWT.GetWebTwain('test');
  title = 'dwt-angular-jest';
}
