import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'taskify-frontend';

  constructor(private router: Router) {}

  navigateToHome(): void {
    this.router.navigate(['/']);
  }
}
