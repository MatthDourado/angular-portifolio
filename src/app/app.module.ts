import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { PrincipalCardComponent } from './components/principal-card/principal-card.component';
import { TechStackComponent } from './components/tech-stack/tech-stack.component';
import { NormalCardComponent } from './components/normal-card/normal-card.component';
import { MenuMobileComponent } from './components/menu.mobile/menu.mobile.component';
import { HomeComponent } from './pages/home/home.component';
import { TecnologiasComponent } from './pages/tecnologias/tecnologias.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PrincipalCardComponent,
    TechStackComponent,
    NormalCardComponent,
    MenuMobileComponent,
    HomeComponent,
    TecnologiasComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
