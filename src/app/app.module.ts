import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoolComponent } from './pool/pool.component';
import { GolfComponent } from './golf/golf.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { SliderComponent } from './slider/slider.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PoolComponent,
    GolfComponent,
    ContactComponent,
    AboutComponent,
    MenuComponent,
    SliderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'about', component: AboutComponent},
      {path: 'golf', component: GolfComponent},
      {path: 'pool', component: PoolComponent},
      {path: 'contact', component: ContactComponent},
      {path: '', component: HomeComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
