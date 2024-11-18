import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CurrentTimeComponent } from './current-time/current-time.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CurrentTimeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Timedashboard';
}
