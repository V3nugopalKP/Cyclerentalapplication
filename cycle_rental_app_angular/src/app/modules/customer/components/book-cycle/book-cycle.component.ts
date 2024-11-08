import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-cycle',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './book-cycle.component.html',
  styleUrls: ['./book-cycle.component.scss']  // Note the plural: styleUrls
})
export class BookCycleComponent {
  cycleId!: number;
  cycle: any;
  processedImage: any;

  constructor(private service: CustomerService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
      this.cycleId = this.activatedRoute.snapshot.params["id"]; // Moved here to ensure activatedRoute is initialized
      this.getCycleById();
  }

  getCycleById() {
      this.service.getCycleById(this.cycleId).subscribe((res) => {
          console.log(res);
          this.processedImage = 'data:image/jpeg;base64,' + res.returnedImage;
          this.cycle = res;
      });
  }
}
