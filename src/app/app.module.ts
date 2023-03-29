import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { PlayerService } from './services/player/player.service';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [AppComponent, MainComponent, FooterComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [PlayerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
