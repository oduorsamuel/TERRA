import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppMaterialModule} from './app-material/app-material.module';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ScreenfourComponent } from './screenfour/screenfour.component';
import { ScreenfiveComponent } from './screenfive/screenfive.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ScreenfourComponent,
    ScreenfiveComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
