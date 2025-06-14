import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    standalone: false
})
export class HomeComponent {

  constructor(
    private router: Router
  ) {}

  public navivateToRegister(): void {
    this.router.navigate(['/register']);
  }
}
