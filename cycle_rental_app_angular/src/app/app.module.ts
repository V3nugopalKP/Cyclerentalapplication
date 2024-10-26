import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common'; // Import registerLocaleData
import en from '@angular/common/locales/en'; // Import English locale

// NG ZORRO IMPORTS
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n'; // Import NZ_I18N and en_US
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

// Import your components
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { AppRoutingModule } from './app-routing.module'; // Import your routing module

// Registering English Locale
registerLocaleData(en); // Register the English locale

@NgModule({
  declarations: [

    // Add any other components here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Import AppRoutingModule here
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NzSpinModule,
    NzButtonModule,
    NzInputModule,
    NzLayoutModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }, // Use NZ_I18N for NG ZORRO localization
  ],
  bootstrap: [], // Bootstrap the main AppComponent
})
export class AppModule {}
