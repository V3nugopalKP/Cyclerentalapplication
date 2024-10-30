import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { AdminService } from '../../services/admin.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';


@Component({
  selector: 'app-post-cycle',
  standalone: true,
  imports: [NzSpinModule,NzButtonModule,NzFormModule,ReactiveFormsModule,NzSelectModule,NzDatePickerModule,CommonModule],
  templateUrl: './post-cycle.component.html',
  styleUrl: './post-cycle.component.scss'
})
export class PostCycleComponent {
  postCycleForm! : FormGroup;
  isSpinning: boolean = false;
  selectedFile: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;

  // Update to cycle brands
  listOfOption: Array<{ label: string; value: string }> = [];
  listOfBrands = ["Trek", "Giant", "Specialized", "Cannondale", "Bianchi", "Cervelo", "Santa Cruz", "Yeti"];
  listOfType = ["Road Bike", "Mountain Bike", "Hybrid Bike", "Electric Bike", "BMX", "Gravel Bike"];
  listOfColor = ["Red", "White", "Blue", "Black", "Orange", "Grey", "Silver"];
  listOfTransmission = ["Geared", "Non-Geared"];

  constructor(private fb: FormBuilder,
    private adminService : AdminService,
    private message : NzMessageService,
    private router : Router
  ) { }

  ngOnInit() {
    this.postCycleForm = this.fb.group({
      name: [null, Validators.required],
      brand: [null, Validators.required],
      type: [null, Validators.required],
      color: [null, Validators.required],
      transmission: [null, Validators.required],
      price: [null, Validators.required],
      description: [null, Validators.required],
      year: [null, Validators.required]
    });
}

  postCycle() {
    console.log(this.postCycleForm.value);

    this.isSpinning = true;
    const formData: FormData = new FormData();

    formData.append('image', this.postCycleForm.get('image')?.value);
    formData.append('brand', this.postCycleForm.get('brand')?.value);
    formData.append('name', this.postCycleForm.get('name')?.value);
    formData.append('type', this.postCycleForm.get('type')?.value);
    formData.append('transmission', this.postCycleForm.get('transmission')?.value);
    formData.append('color', this.postCycleForm.get('color')?.value);
    formData.append('year', this.postCycleForm.get('year')?.value);    
    formData.append('description', this.postCycleForm.get('description')?.value);
    formData.append('price', this.postCycleForm.get('price')?.value);

    console.log(formData);

    this.adminService.postCycle(formData).subscribe(res => {
      this.isSpinning = false;
      this.message.success("Cycle posted successfully", { nzDuration: 5000 });
      this.router.navigateByUrl("/admin/dashboard");
      console.log(res);
    }, error => {
      this.message.error("Error while posting cycle", { nzDuration: 5000 });
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.previewImage();
  }
  
  // Function to preview image
  previewImage() {
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    if (this.selectedFile) {
      reader.readAsDataURL(this.selectedFile);
    }
  }

}
