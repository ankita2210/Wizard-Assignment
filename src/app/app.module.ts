import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillsComponent } from './knowledge/skills/skills.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WizardFinishedComponent } from './wizard-finished/wizard-finished.component';
import { WorkExperienceComponent } from './knowledge/work-experience/work-experience.component';
import { PersonalModule } from './personal/personal.module';
import { PersonalDetailsComponent } from './personal/personal-details/personal-details.component';
import { ContactDetailsComponent } from './personal/contact-details/contact-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    WelcomeComponent,
    WizardFinishedComponent,
    WorkExperienceComponent,
    PersonalDetailsComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PersonalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
