import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { APP_TITLE } from '../utils';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private titleService: Title,
    private formGroup: FormBuilder
  ) {
    // settings title
    this.titleService.setTitle(`REGISTER | ${APP_TITLE}`);

    // default registration form control group.
    this.registerForm = this.formGroup.group({
      first_name: ['Abhishek', Validators.required],
      last_name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirm: ['', Validators.required],
    }, { validators: this.matchKeys('password', 'confirm')});
  }


  ngOnInit() {
    console.log(this.registerForm);
  }


  private matchKeys(key1: string, key2: string) {
    return (group: FormGroup) => {
      if (group.controls[key1].value !== group.controls[key2].value) {
        return { passwordMismatch: true };
      }
    };
  }


}
