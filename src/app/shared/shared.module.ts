import { NgModule } from "@angular/core";
import { LineAnimationComponent } from "./line-anime/line-anime.component";
import { TypeTextAnimation } from "./type-text/type-text.component";

@NgModule({
	declarations: [
		TypeTextAnimation,
		LineAnimationComponent
	],
	exports: [
		TypeTextAnimation,
		LineAnimationComponent
	],
  imports:[]
})

export class SharedModule { }