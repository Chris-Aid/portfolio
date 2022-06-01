import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ImprintComponent } from './imprint/imprint.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { MySkillsComponent } from './my-skills/my-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ImprintComponent,
    DataProtectionComponent,
    IntroductionComponent,
    MySkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
