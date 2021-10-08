import { Component } from '@angular/core';

import { LoginModel } from '../models/login-model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = new LoginModel(
    'testNickmane',
    'test@email.com',
    'Male',
    'Paul',
    'Walker',
    '123test',
    'Chuck Overstreet'
  );

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  newHero() {
    this.model = new LoginModel('', '', '', '', '', '', '');
  }

  skyDog(): LoginModel {
    const myLogin = new LoginModel(
      'dog',
      'skyDog@email.com',
      'Male',
      'Sky',
      'Dog',
      'password',
      'Leslie Rollover'
    );
    console.log('Your username is ' + myLogin.userName);
    return myLogin;
  }

  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls.name && form.controls.name.value; // Dr. IQ
  }

  /////////////////////////////
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
