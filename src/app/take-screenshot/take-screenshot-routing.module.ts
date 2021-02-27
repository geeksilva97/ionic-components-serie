import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TakeScreenshotPage } from './take-screenshot.page';

const routes: Routes = [
  {
    path: '',
    component: TakeScreenshotPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TakeScreenshotPageRoutingModule {}
