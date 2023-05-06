import { Component, OnInit } from '@angular/core';
import { FormBuilder, MaxValidator, Validators } from '@angular/forms';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    public contactService: ContactService) { }

  ContactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    subject: ['', Validators.required],
    phone: [''],
    message: ['', Validators.required],
  });

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('onSubmit: ', this.ContactForm.value);
    // this.ContactForm.invalid
    this.contactService.add(this.ContactForm.value)
    // this.contactService.get()
      .subscribe((response: any) => {
        console.log("response data : ", response);
      });

  }

  resetForm() {
    this.ContactForm.reset();
  }
}
