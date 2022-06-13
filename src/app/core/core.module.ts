import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AuthGuard } from './guards/auth.guard';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SidemenuComponent,
 
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    SidemenuComponent
  ],
})
export class CoreModule { }
