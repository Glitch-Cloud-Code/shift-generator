import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TopPanelComponent } from './components/top-panel/top-panel.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { BottomPanelComponent } from './components/bottom-panel/bottom-panel.component';
import { PropertiesComponent } from './components/properties/properties.component';
import { WorkersMenuComponent } from './components/workers-menu/workers-menu.component';
import { WorkerPropertiesComponent } from './components/worker-properties/worker-properties.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material-module';
import { WeekdayInputComponent } from './components/weekday-input/weekday-input.component';
import { CommonModule } from '@angular/common';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { ShiftsComponent } from './components/shifts/shifts.component';
import { WorkPeriodComponent } from './components/work-period/work-period.component'


@NgModule({
  declarations: [
    AppComponent,
    TopPanelComponent,
    NavMenuComponent,
    BottomPanelComponent,
    PropertiesComponent,
    WorkersMenuComponent,
    WorkerPropertiesComponent,
    WeekdayInputComponent,
    ShiftsComponent,
    WorkPeriodComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CommonModule,
    NgxMaterialTimepickerModule.setLocale("uk-UA")
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
