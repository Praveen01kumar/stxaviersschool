import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  standalone: true,
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  imports: [ReactiveFormsModule]
})
export class ContactComponent {
  contactForm: FormGroup;
  USER_ID: string = "PvTkPcd3Zd3pVehUs";
  SERVICE_ID: string = "service_x23ky4n";
  TEMPLATE_ID: string = "template_nyw3s6k";
  contact = {
    phone: '+91 9876543210',
    email: 'bm000543@gmail.com',
    location: 'Supaul, Bihar, India'
  }

  constructor(private fb: FormBuilder) {
    emailjs.init(this.USER_ID);
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
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
          alert('Your message has been sent successfully!');
        }
      }, (error) => { alert(error); });
    } else {
      alert('Please fill out the form correctly');
    }
  }

}
