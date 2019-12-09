import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PersonalDetailsComponent } from './personal/personal-details/personal-details.component';
import { ContactDetailsComponent } from './personal/contact-details/contact-details.component';
import { SkillsComponent } from './knowledge/skills/skills.component';
import { WorkExperienceComponent } from './knowledge/work-experience/work-experience.component';
import { WizardFinishedComponent } from './wizard-finished/wizard-finished.component';

const routes: Routes = [
  { path: "", redirectTo: "welcome", pathMatch: "full" },
  { path: "welcome", component: WelcomeComponent },
  { path: "step-1", component: PersonalDetailsComponent },
  { path: "step-2", component: ContactDetailsComponent },
  { path: "step-3", component: SkillsComponent },
  { path: "step-4", component: WorkExperienceComponent },
  { path: "wizard-finished", component: WizardFinishedComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
