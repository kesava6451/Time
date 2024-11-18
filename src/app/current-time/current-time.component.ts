import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-time',
  standalone: true,
  templateUrl: './current-time.component.html',
  styleUrls: ['./current-time.component.css']
})
export class CurrentTimeComponent implements OnInit {
  Date1 : Date = new Date();
  constructor() {}

  ngOnInit(): void {
    this.updateTime();
  }

  updateTime(): void {
    setInterval(() => {
      this.Date1 = new Date(); // Updates the time every second
    }, 1000);
  }
}
