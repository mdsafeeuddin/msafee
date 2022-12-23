import { Component } from '@angular/core';
import { TimelineElement } from './timeline-element';

@Component({
  selector: 'website-edu',
  templateUrl: 'education.component.html',
  styleUrls: ['education.component.css']
})

export class EducationComponent{
  content = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae 
  ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, 
  ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam 
  quisquam, quae, temporibus dolores porro doloribus.`;

  timeline: TimelineElement[] = [];
  
  constructor(){
  
   this.timeline = [
    { caption: 'SSC', date: new Date(2004, 3, 16), title: 'School', content: this.content },
    { caption: '+2', date: new Date(2006, 5, 28), title: 'Intermediate', content: this.content },
    { caption: 'B.Sc', date: new Date(2010, 12, 20), selected: true, title: 'Nursing', content: this.content },
    { caption: 'MBA', date: new Date(2015, 5, 20), title: 'Hospital Management', content: this.content },
    { caption: 'PGC', date: new Date(2018, 12, 9), title: 'Certification', content: this.content }
    ];
  }
    
  
}