import { Component, OnInit } from '@angular/core';
import {ApiService} from "../services/api.service";

@Component({
  selector: 'app-data-of-flights',
  templateUrl: './data-of-flights.page.html',
  styleUrls: ['./data-of-flights.page.scss'],
})
export class DataOfFlightsPage implements OnInit {
  constructor(public api: ApiService) { }
  public data: any;
  ngOnInit(){
    this.subscribeToInformation();
  }
  subscribeToInformation(){
    this.api.getSpaceXInformation().subscribe((result:any) =>{
      this.data = result;
      console.log(this.data)
    })
  }

}
