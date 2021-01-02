import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})
export class TripsComponent implements OnInit {

	@Input() title: string;
  constructor() { }

  ngOnInit(): void {
  }

}
