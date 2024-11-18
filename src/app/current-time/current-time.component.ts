import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-time',
  standalone: true,
  templateUrl: './current-time.component.html',
  styleUrls: ['./current-time.component.css']
})
export class CurrentTimeComponent implements OnInit {
  Date1 : Date = new Date();
  LocalDate : String = new Date().toLocaleString()
  constructor() {}

  ngOnInit(): void {
    this.updateTime();
  }

  updateTime(): void {
    setInterval(() => {
      this.Date1 = new Date(); // Updates the time every second
      this.LocalDate = this.Date1.toLocaleDateString(); // Formats the date to local
    }, 1000);
  }
}
