import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackButtonComponent } from './components/back-button/back-button.component';
import { SubscriptionFormComponent } from './subscription-form.component';

@NgModule({
  declarations: [
    BackButtonComponent,
    SubscriptionFormComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class SubscriptionFormModule { }