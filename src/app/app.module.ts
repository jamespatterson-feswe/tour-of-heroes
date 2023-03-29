/** angular and modules */
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
/** components */
import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';
/** services */
import { HeroService } from './services/hero/hero.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
