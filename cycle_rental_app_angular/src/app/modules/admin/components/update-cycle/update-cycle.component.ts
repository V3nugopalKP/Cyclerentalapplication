import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { CommonModule } from '@angular/common';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-update-cycle',
  standalone: true,
  imports: [NzSpinModule, NzButtonModule,NzInputModule, NzFormModule, ReactiveFormsModule, NzSelectModule, NzDatePickerModule, CommonModule],
  templateUrl: './update-cycle.component.html',
  styleUrl: './update-cycle.component.scss'
})
export class UpdateCycleComponent {
  isSpinning = false;
  cycleId!: number;
  existingImage: string | null = null;
  updateForm!: FormGroup;
  listOfOption: Array<{ label: string; value: string }> = [];
  listOfBrands = ["Trek", "Giant", "Specialized", "Cannondale", "Bianchi", "Cervelo", "Santa Cruz", "Yeti"];
  listOfType = ["Road Bike", "Mountain Bike", "Hybrid Bike", "Electric Bike", "BMX", "Gravel Bike"];
  listOfColor = ["Red", "White", "Blue", "Black", "Orange", "Grey", "Silver"];
  listOfTransmission = ["Geared", "Non-Geared"];

  constructor(
    private adminService: AdminService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.cycleId = this.activatedRoute.snapshot.params['id'];
    this.updateForm = this.fb.group({  // Added parentheses around the form group object
      name: [null, Validators.required],
      brand: [null, Validators.required],
      type: [null, Validators.required],
      color: [null, Validators.required],
      transmission: [null, Validators.required],
      price: [null, Validators.required],
      description: [null, Validators.required],
      year: [null, Validators.required],
      image: [null, Validators.required]  // Added image control
    });
    this.getCycleById();
  }

  getCycleById() {
    this.isSpinning = true;
    this.adminService.getCycleById(this.cycleId).subscribe((res) => {
      // console.log(res);
      this.isSpinning = false;
      const cycleDto = res;
      this.existingImage = 'data:image/jpeg;base64,' + res.returnedImage;
      this.updateForm.patchValue(cycleDto);
    });
  }
}
