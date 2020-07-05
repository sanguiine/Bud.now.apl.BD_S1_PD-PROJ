import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
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

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [

{ path: 'about', component: AboutComponent },

{ path: 'account', component: AccountComponent},

{ path: 'cart', component : CartComponent},

{ path: 'checkout', component : CheckoutComponent},

{ path: 'contact', component : ContactComponent},

{ path: 'edit', component : EditComponent},

{ path: 'index', component : IndexComponent},

{ path: 'loan', component : LoanComponent},

{ path: 'login', component : LoginComponent},

{ path: 'logout', component : LogoutComponent},

{ path: 'read', component : ReadComponent},

{ path: 'register', component : RegisterComponent},

{ path: 'reservation', component : ReservationComponent},

{ path: 'shop', component : ShopComponent},

{ path: 'shop-single', component : ShopSingleComponent},

{ path: 'success', component : SuccessComponent},

{ path: 'thankyou', component : ThankyouComponent},

{ path: '',

redirectTo:'/index',

pathMatch:'full'

}

];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    AboutComponent,
    AccountComponent,
    CartComponent,
    CheckoutComponent,
    ContactComponent,
    EditComponent,
    LoanComponent,
    LoginComponent,
    LogoutComponent,
    ReadComponent,
    RegisterComponent,
    ReservationComponent,
    ShopComponent,
    ShopSingleComponent,
    SuccessComponent,
    ThankyouComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
