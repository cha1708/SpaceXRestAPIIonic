import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataOfFlightsPage } from './data-of-flights.page';

describe('DataOfFlightsPage', () => {
  let component: DataOfFlightsPage;
  let fixture: ComponentFixture<DataOfFlightsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DataOfFlightsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
