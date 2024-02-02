import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataOfFlightsPageRoutingModule } from './data-of-flights-routing.module';

import { DataOfFlightsPage } from './data-of-flights.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataOfFlightsPageRoutingModule
  ],
  declarations: [DataOfFlightsPage]
})
export class DataOfFlightsPageModule {}
