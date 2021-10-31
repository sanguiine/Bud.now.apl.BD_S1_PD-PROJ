import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { IndexComponent } from './components/site/index/index.component';
import { AboutComponent } from './components/site/about/about.component';
import { AccountComponent } from './components/site/account/account.component';
import { CartComponent } from './components/site/cart/cart.component';
import { CheckoutComponent } from './components/site/checkout/checkout.component';
import { ContactComponent } from './components/site/contact/contact.component';
import { EditComponent } from './components/site/edit/edit.component';
import { LoanComponent } from './components/site/loan/loan.component';
import { LoginComponent } from './components/site/login/login.component';
import { LogoutComponent } from './components/site/logout/logout.component';
import { ReadComponent } from './components/site/read/read.component';
import { RegisterComponent } from './components/site/register/register.component';
import { ReservationComponent } from './components/site/reservation/reservation.component';
import { ShopComponent } from './components/site/shop/shop.component';
import { ShopSingleComponent } from './components/site/shop-single/shop-single.component';
import { SuccessComponent } from './components/site/success/success.component';
import { ThankyouComponent } from './components/site/thankyou/thankyou.component';
import { AdminComponent } from './components/site/admin/admin.component';
import { SidemenuComponent } from './components/layout/sidemenu/sidemenu.component';
import { AdminbooksComponent } from './components/site/adminbooks/adminbooks.component';
import { AdmingenresComponent } from './components/site/admingenres/admingenres.component';
import { AdminloansComponent } from './components/site/adminloans/adminloans.component';
import { AdminreservationsComponent } from './components/site/adminreservations/adminreservations.component';
import { AdminusersComponent } from './components/site/adminusers/adminusers.component';
import { AdminwritersComponent } from './components/site/adminwriters/adminwriters.component';
import { AdmineditbooksComponent } from './components/site/admineditbooks/admineditbooks.component';


import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: IndexComponent, canActivate:[AuthGaurdService]},
  { path: 'about', component: AboutComponent},
  { path: 'account', component: AccountComponent, canActivate:[AuthGaurdService]},
  { path: 'cart', component : CartComponent, canActivate:[AuthGaurdService]},
  { path: 'checkout', component : CheckoutComponent, canActivate:[AuthGaurdService]},
  { path: 'contact', component : ContactComponent},
  { path: 'edit', component : EditComponent, canActivate:[AuthGaurdService]},
  { path: 'index', component : IndexComponent},
  { path: 'loan', component : LoanComponent, canActivate:[AuthGaurdService]},
  { path: 'login', component : LoginComponent},
  { path: 'logout', component : LogoutComponent, canActivate:[AuthGaurdService]},
  { path: 'read', component : ReadComponent, canActivate:[AuthGaurdService]},
  { path: 'register', component : RegisterComponent},
  { path: 'reservation', component : ReservationComponent, canActivate:[AuthGaurdService]},
  { path: 'shop', component : ShopComponent},
  { path: 'shop-single/:id', component : ShopSingleComponent, canActivate:[AuthGaurdService]},
  { path: 'success', component : SuccessComponent},
  { path: 'thankyou', component : ThankyouComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'adminloans', component: AdminloansComponent},
  { path: 'adminreservations', component: AdminreservationsComponent},
  { path: 'adminusers', component: AdminusersComponent},
  { path: 'adminbooks', component: AdminbooksComponent},
  { path: 'admingenres', component: AdmingenresComponent},
  { path: 'adminwriters', component: AdminwritersComponent},
  { path: 'admineditbooks', component: AdmineditbooksComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
