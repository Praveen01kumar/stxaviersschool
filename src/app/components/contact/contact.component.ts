import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { CONTACT_SECTION_CONTENT } from '../../services/constants';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  standalone: true,
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  imports: [ReactiveFormsModule]
})
export class ContactComponent {
  contactCon = CONTACT_SECTION_CONTENT;
  contactForm: FormGroup;
  USER_ID: string = this.contactCon.emailJs.USER_ID;
  SERVICE_ID: string = this.contactCon.emailJs.SERVICE_ID;
  TEMPLATE_ID: string = this.contactCon.emailJs.TEMPLATE_ID;
  safeMapUrl!: SafeResourceUrl;
  constructor(private fb: FormBuilder, private sanitizer: DomSanitizer) {
    emailjs.init(this.USER_ID);
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
    this.safeMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.contactCon.map.embedLink)
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const payload = {
        ...this.contactForm.value,
        time: new Date().toLocaleString()
      };
      emailjs.send(this.SERVICE_ID, this.TEMPLATE_ID, payload).then((response: EmailJSResponseStatus) => {
        if (response?.status === 200) {
          this.contactForm.reset();
          alert(this.contactCon.form.alerts.success);
        }
      }, (error) => { alert(error); });
    } else {
      alert(this.contactCon.form.alerts.invalid);
    }
  }

}
