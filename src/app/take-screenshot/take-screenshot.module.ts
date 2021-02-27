import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TakeScreenshotPageRoutingModule } from './take-screenshot-routing.module';

import { TakeScreenshotPage } from './take-screenshot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TakeScreenshotPageRoutingModule
  ],
  declarations: [TakeScreenshotPage]
})
export class TakeScreenshotPageModule {}
