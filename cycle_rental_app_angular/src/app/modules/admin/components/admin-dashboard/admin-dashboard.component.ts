import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from '../../services/admin.service';
@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {
  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.getAllCycles();
  }

  getAllCycles() {
    this.adminService.getAllCycles().subscribe(res => {
      console.log(res);
  
      res.forEach(element => {
        element.processedImg = 'data:image/jpeg;base64,' + element.returnedImage;
        this.cycles.push(element);
      });
    });
  }
}
