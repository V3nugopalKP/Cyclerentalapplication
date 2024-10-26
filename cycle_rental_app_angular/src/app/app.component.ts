import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NzFormModule,NzButtonModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {

  title = 'cycle_rental_app_angular';
  
  constructor(private router: Router) {}

  // The navigateToLogin function exists now
  navigateToLogin() {
    this.router.navigate(['/login']); // Navigate to the login page
  }
}
