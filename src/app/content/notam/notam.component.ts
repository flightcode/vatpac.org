import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-notam",
  templateUrl: "./notam.component.html"
})
export class NotamComponent implements OnInit {
  @Input() title: string;
  @Input() startDate: string;
  @Input() endDate: string;

  currentDateObject: Date;
  startDateObject: Date;
  endDateObject: Date;

  ngOnInit() {
    this.currentDateObject = new Date();
    this.startDateObject = new Date(this.startDate);
    this.endDateObject = new Date(this.endDate);
  }
}
