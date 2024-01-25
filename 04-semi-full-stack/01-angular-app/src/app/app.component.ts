import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angular-app';
  healthStatus: string = 'Checking server status...';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getHealthCheck().subscribe(
      (response) => {
        this.healthStatus = 'Server status: ' + JSON.stringify(response);
      },
      (error) => {
        this.healthStatus = 'Server is down. Please try again later.';
      }
    );
  }
}
