import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { WebsiteHeader } from "./header/header.component";
import { WebsiteLayout } from "./website-layout.component";
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from "./skills/skills.component";
import { BannerComponent } from "./banner/banner.component";
import { ExperienceComponent } from "./experience/experience.component";

import { SharedModule } from "../../shared/shared.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { EducationComponent } from "./education/education.component";

const routes: Routes = [
  {
    path: '',
    component: WebsiteLayout
  }
];

@NgModule({
  declarations: [
    WebsiteHeader,
    WebsiteLayout,
    AboutComponent,
    SkillsComponent,
    BannerComponent,
    ExperienceComponent,
    EducationComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    NgbModule
  ],
  exports: []
})

export class WebsiteModule{}