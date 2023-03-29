import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubscriptionFormModule } from './subscription-form/subscription-form.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SubscriptionFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
