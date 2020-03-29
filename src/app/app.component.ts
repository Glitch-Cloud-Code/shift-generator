import { Component, Input, ViewChild } from '@angular/core';
import { PropertiesComponent } from './components/properties/properties.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  @ViewChild(PropertiesComponent) propertiesComponent;

  public onCalculate() {
    this.propertiesComponent.calculate();
  }

}
