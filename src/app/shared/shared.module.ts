import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HorizontalTimelineComponent } from "./horizontal-timeline/horizontal-timeline.component";
import { LineAnimationComponent } from "./line-anime/line-anime.component";
import { TypeTextAnimation } from "./type-text/type-text.component";

@NgModule({
	declarations: [
		TypeTextAnimation,
		LineAnimationComponent,
		HorizontalTimelineComponent
	],
	exports: [
		TypeTextAnimation,
		LineAnimationComponent,
		HorizontalTimelineComponent
	],
  imports:[
		CommonModule
	]
})

export class SharedModule { }