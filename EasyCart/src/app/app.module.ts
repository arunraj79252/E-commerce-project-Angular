import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { NavAdminComponent } from './components/shared/nav-admin/nav-admin.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { SellerHomeComponent } from './components/seller/seller-home/seller-home.component';
import { SellerLoginComponent } from './components/seller/seller-login/seller-login.component'
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { NavSellerComponent } from './components/shared/nav-seller/nav-seller.component';
import { SellerRegComponent } from './components/seller/seller-reg/seller-reg.component';
import { InboxComponent } from './components/admin/inbox/inbox.component';
import { MailComponent } from './components/admin/mail/mail.component';
import { ForgetPasswordComponent } from './components/seller/forget-password/forget-password.component';
import { OtpComponent } from './components/seller/otp/otp.component';
import { ChangePasswordComponent } from './components/seller/change-password/change-password.component';
import { SellerLogisticsComponent } from './components/seller/seller-logistics/seller-logistics.component';
import { LogisticsComponent } from './components/admin/logistics/logistics.component';
import { ProfileViewComponent } from './components/customer/profile-view/profile-view.component';
import { ProfileEditComponent } from './components/customer/profile-edit/profile-edit.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CustomerLoginComponent } from './components/customer/customer-login/customer-login.component';
import { NotificationComponent } from './components/admin/notification/notification.component';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  declarations: [
    AppComponent,
    NavAdminComponent,
    NavSellerComponent,
    AdminHomeComponent,
    AdminLoginComponent,
    SellerHomeComponent,
    SellerLoginComponent,
    SellerRegComponent,
    InboxComponent,
    MailComponent,
    ForgetPasswordComponent,
    OtpComponent,
    ChangePasswordComponent,
    SellerLogisticsComponent,
    LogisticsComponent,
    ProfileViewComponent,
    ProfileEditComponent,
    CustomerLoginComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule ,
    MatInputModule,
    MatBadgeModule

     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
