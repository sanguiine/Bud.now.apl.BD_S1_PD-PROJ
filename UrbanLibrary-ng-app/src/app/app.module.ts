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

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AuthGaurdService } from './service/auth-gaurd.service';

import { HttpClientModule } from '@angular/common/http';
import { MyFilterPipePipe } from './shared/pipes/my-filter-pipe.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';

const appRoutes: Routes = [

{ path: 'about', component: AboutComponent},

{ path: 'account', component: AccountComponent, canActivate:[AuthGaurdService]},

{ path: 'cart', component : CartComponent, canActivate:[AuthGaurdService]},

{ path: 'checkout', component : CheckoutComponent, canActivate:[AuthGaurdService]},

{ path: 'contact', component : ContactComponent},

{ path: 'edit', component : EditComponent, canActivate:[AuthGaurdService]},

{ path: 'index', component : IndexComponent},

{ path: 'loan', component : LoanComponent, canActivate:[AuthGaurdService]},

{ path: 'login', component : LoginComponent},

{ path: 'logout', component : LogoutComponent},

{ path: 'read', component : ReadComponent, canActivate:[AuthGaurdService]},

{ path: 'register', component : RegisterComponent},

{ path: 'reservation', component : ReservationComponent, canActivate:[AuthGaurdService]},

{ path: 'shop', component : ShopComponent},

{ path: 'shop/shop-single/:id', component : ShopSingleComponent, canActivate:[AuthGaurdService]},

{ path: 'success', component : SuccessComponent},

{ path: 'thankyou', component : ThankyouComponent},

{ path: '', redirectTo:'/index',  pathMatch:'full', canActivate:[AuthGaurdService]}

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
    ThankyouComponent,
    MyFilterPipePipe,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
  ],
  providers: [MyFilterPipePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
