import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { InboxComponent } from './components/admin/inbox/inbox.component';
import { LogisticsComponent } from './components/admin/logistics/logistics.component';
import { NotificationComponent } from './components/admin/notification/notification.component';
import { CustomerLoginComponent } from './components/customer/customer-login/customer-login.component';
import { ProfileEditComponent } from './components/customer/profile-edit/profile-edit.component';
import { ProfileViewComponent } from './components/customer/profile-view/profile-view.component';
import { ChangePasswordComponent } from './components/seller/change-password/change-password.component';
import { ForgetPasswordComponent } from './components/seller/forget-password/forget-password.component';
import { OtpComponent } from './components/seller/otp/otp.component';
import { SellerHomeComponent } from './components/seller/seller-home/seller-home.component';
import { SellerLoginComponent } from './components/seller/seller-login/seller-login.component';
import { SellerLogisticsComponent } from './components/seller/seller-logistics/seller-logistics.component';
import { SellerRegComponent } from './components/seller/seller-reg/seller-reg.component';

const routes: Routes = [
  {path:"",component:AdminLoginComponent},
  {path:"admin-home",component:AdminHomeComponent},
  {path:"seller-home",component:SellerHomeComponent},
  {path:"seller-reg",component:SellerRegComponent},
  {path:"seller-login",component:SellerLoginComponent},
  {path:"admin-inbox",component:InboxComponent},
  {path:"forget-password",component:ForgetPasswordComponent},
  {path:"otp",component:OtpComponent},
  {path:"change-password",component:ChangePasswordComponent},
  {path:"seller-logistics",component:SellerLogisticsComponent},
  {path:"logistics",component:LogisticsComponent},
  {path:"customer-login",component:CustomerLoginComponent},
  {path:"customer-profile",component:ProfileViewComponent},
  {path:"customer-profile-edit",component:ProfileEditComponent},
  {path:"notification",component:NotificationComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
