import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-update-cycle',
  standalone: true,
  imports: [],
  templateUrl: './update-cycle.component.html',
  styleUrl: './update-cycle.component.scss'
})
export class UpdateCycleComponent {
  cycleId!: number;

  constructor(
    private adminService: AdminService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.cycleId = this.activatedRoute.snapshot.params['id'];
    this.getCycleById();
  }

  getCycleById() {
    this.adminService.getCycleById(this.cycleId).subscribe((res) => {
      console.log(res);
    });
  }
}
