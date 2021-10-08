import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form-reactive',
  templateUrl: './login-form-reactive.component.html',
  styleUrls: ['./login-form-reactive.component.css'],
})
export class LoginFormReactiveComponent implements OnInit {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    aliases: this.fb.array([this.fb.control('')]),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}
}
