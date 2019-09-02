import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { ConfigService } from './services/config.service';
import { TablaComponent } from './components/tabla/tabla.component';
import { FormComponent } from './components/form/form.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MyMaterialModule } from './material.module';


export function initializeApp(appConfig: ConfigService) {
  return () => appConfig.load();
}

@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MyMaterialModule
  ],
  providers: [
    ConfigService,
    { provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [ConfigService], multi: true }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
