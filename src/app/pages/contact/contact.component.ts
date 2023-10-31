import { Component, ChangeDetectorRef  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(public fb: FormBuilder, private sanitizer: DomSanitizer, private cd: ChangeDetectorRef){}

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    mobile: ['', [Validators.required]],
    message: ['', [Validators.required]]

  });

  generateMailtoLink() {
    const recipient = 'mdsafeeuddin@gmail.com'; // Replace with the actual recipient's email address
    const subject = 'Contact message from portfolio';
    const body = `Hello this is!\n\nName: ${this.contactForm.get('name')?.value}\nEmail: ${this.contactForm.get('email')?.value}\nMobile: ${this.contactForm.get('mobile')?.value}\nMessage: ${this.contactForm.get('message')?.value}`;
    const mailtoUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=${recipient}&su=${subject}&body=${body}`
    // const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${encodeURIComponent(body)}`;
    // this.contactForm.reset();
    return this.sanitizer.bypassSecurityTrustUrl(mailtoUrl);
  }

}
