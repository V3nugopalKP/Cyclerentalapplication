import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { AuthService } from '../../services/auth/auth.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NzSpinModule,NzButtonModule,NzFormModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  isSpinning: boolean = false;
  loginForm!: FormGroup

  constructor(private fb:FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
      this.loginForm = this.fb.group({
          email: [null, [Validators.email, Validators.required]],
          password: [null, [Validators.required]]
      })
  }

  login() {
    console.log(this.loginForm.value);
  
    this.authService.login(this.loginForm.value).subscribe(res => {
      console.log(res);
    });
  }

}
