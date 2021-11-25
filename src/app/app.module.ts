import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageAdidasComponent } from './page-adidas/page-adidas.component';
import { PageNikeComponent } from './page-nike/page-nike.component';
import { HomeComponent } from './home/home.component';
import { PagePumaComponent } from './page-puma/page-puma.component';
import { PageVansComponent } from './page-vans/page-vans.component';
import { PageConverseComponent } from './page-converse/page-converse.component';
import { PageFilaComponent } from './page-fila/page-fila.component';
import { PageNewBalanceComponent } from './page-new-balance/page-new-balance.component';
import { PageDunkLowComponent } from './page-dunk-low/page-dunk-low.component';
import { PageJordanComponent } from './page-jordan/page-jordan.component';
import { PageYeezyComponent } from './page-yeezy/page-yeezy.component';
import { RouterModule } from '@angular/router';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';

@NgModule({
  declarations: [
    AppComponent,
    PageAdidasComponent,
    PageNikeComponent,
    HomeComponent,
    PagePumaComponent,
    PageVansComponent,
    PageConverseComponent,
    PageFilaComponent,
    PageNewBalanceComponent,
    PageDunkLowComponent,
    PageJordanComponent,
    PageYeezyComponent,
    MenuLateralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "", redirectTo:'/home', pathMatch: 'full'},
      { path: "home/tenis-nike", component: PageNikeComponent },
      { path: "home/tenis-adidas", component: PageAdidasComponent },
      { path: "home/tenis-puma", component: PagePumaComponent },
      { path: "home/tenis-vans", component: PageVansComponent },
      { path: "home/tenis-fila", component: PageFilaComponent },
      { path: "home/tenis-converse", component: PageConverseComponent },
      { path: "home/tenis-new-balance", component: PageNewBalanceComponent },
      { path: "home/nike-dunk-low", component: PageDunkLowComponent },
      { path: "home/nike-jordan", component: PageJordanComponent },
      { path: "home/adidas-yeezy", component: PageYeezyComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
