import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { HttpModule } from '@angular/http';
import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MembersComponent } from './components/members/members/members.component';
import { MemberDetailsComponent } from './components/members/member-details/member-details.component';
import { EditMembersComponent } from './components/members/edit-members/edit-members.component';
import { AddMembersComponent } from './components/members/add-members/add-members.component';
import { MerchantsComponent } from './components/merchants/merchants/merchants.component';
import { AddMerchantsComponent } from './components/merchants/add-merchants/add-merchants.component';
import { EditMerchantsComponent } from './components/merchants/edit-merchants/edit-merchants.component';
import { MerchantDetailsComponent } from './components/merchants/merchant-details/merchant-details.component';
import { OrdersComponent } from './components/orders/orders/orders.component';
import { OrderDetailsComponent } from './components/orders/order-details/order-details.component';
import { TemplatesComponent } from './components/emails/templates/templates.component';
import { TemplateDetailsComponent } from './components/emails/template-details/template-details.component';
import { AddTemplatesComponent } from './components/emails/add-templates/add-templates.component';
import { EditTemplatesComponent } from './components/emails/edit-templates/edit-templates.component';
import { ChangePasswordComponent } from './components/settings/change-password/change-password.component';
import { LoginComponent } from './components/login/login.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { TopmenuComponent } from './components/topbar/topmenu/topmenu.component';
import { ProductsComponent } from './components/products/products.component';

import { LoginService } from './services/login.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { TopmenuService } from './services/topmenu.service';
import { MembersService } from './services/members.service';
import { FooterComponent } from './components/footer/footer.component';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, data: { pageTitle: 'Dashboard' }},
  {path: 'members', component: MembersComponent},
  {path: 'members/add-members', component: AddMembersComponent},
  {path: 'members/details/:id', component: MemberDetailsComponent},
  {path: 'members/details/:id/edit-members/:id', component: EditMembersComponent},
  {path: 'merchants', component: MerchantsComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'promo-emails', component: TemplatesComponent},
  {path: 'settings', component: ChangePasswordComponent},
  {path: 'reset-password', component: ResetPasswordComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    DashboardComponent,
    MembersComponent,
    MemberDetailsComponent,
    EditMembersComponent,
    AddMembersComponent,
    MerchantsComponent,
    AddMerchantsComponent,
    EditMerchantsComponent,
    MerchantDetailsComponent,
    OrdersComponent,
    ProductsComponent,
    OrderDetailsComponent,
    TemplatesComponent,
    TemplateDetailsComponent,
    AddTemplatesComponent,
    EditTemplatesComponent,
    ChangePasswordComponent,
    LoginComponent,
    ResetPasswordComponent,
    TopmenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    FlashMessagesModule,
    HttpModule,
    DataTablesModule
  ],
  providers: [
    LoginService,
    FlashMessagesService,
    TopmenuService,
    MembersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
