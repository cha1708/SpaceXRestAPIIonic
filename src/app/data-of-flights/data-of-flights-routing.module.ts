import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataOfFlightsPage } from './data-of-flights.page';

const routes: Routes = [
  {
    path: '',
    component: DataOfFlightsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataOfFlightsPageRoutingModule {}
