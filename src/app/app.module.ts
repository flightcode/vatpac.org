import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JumbotronComponent } from './content/jumbotron/jumbotron.component';
import { CardComponent } from './content/card/card.component';
import { FooterComponent } from './footer/footer.component';
import { NotamComponent } from './content/notam/notam.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    JumbotronComponent,
    CardComponent,
    FooterComponent,
    NotamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
