import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    // Initialize your secure Public API token key here when initializing
    emailjs.init('sLtfcG6NB-ZOVD_WP');
  }

  /**
   * Safe data interception routing function sending customer entries directly to your official inbox
   */
  onDispatchEnquiry(form: NgForm): void {
    if (!form.valid) return;

    // We change the keys to match {{name}} and {{message}} from image_707e5d.png
    const dynamicPayload = {
      name: form.value.userName,          // This maps right into {{name}}
      user_phone: form.value.userPhone,   
      user_email: form.value.userEmail,   
      selected_category: form.value.enquiryCategory,
      message: `Category: ${form.value.enquiryCategory}\nPhone: ${form.value.userPhone}\nEmail: ${form.value.userEmail}\n\nMessage Details:\n${form.value.userMessage}` // This bundles everything nicely into {{message}}
    };

    // Dispatch parameters to EmailJS
    emailjs.send('service_pgl90zn', 'template_7y8vqkp', dynamicPayload)
      .then((response) => {
        alert('Thank you! Your enquiry has been successfully routed to our office inbox.');
        form.resetForm();
      })
      .catch((error) => {
        console.error('Email gateway dispatch failure:', error);
        alert('System was unable to submit the form at this moment.');
      });
  }
}