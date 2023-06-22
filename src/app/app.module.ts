import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { serverComponent } from 'src/server/server.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { successAlert } from './successAlert/successAlert.component';

@NgModule({
  declarations: [
    AppComponent,
    serverComponent,
    WarningAlertComponent,
    successAlert
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
