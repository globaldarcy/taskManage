import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup
  private items: string[] = [];
  private nums: number = 16;
  private readonly avatarName = 'avatars';
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    const img = `${this.avatarName}:svg-${Math.floor(Math.random() * 16).toFixed(0)}`;
    for (let i = 1; i <= this.nums; i++) {
      this.items.push(`avatars:svg-${i}`);
    }
    this.form = this.fb.group({
      email: [],
      name: [],
      password: [],
      repeat: [],
      avatar: [img]
    });
  }
  onSubmit(form, ev: Event) {

  }
}
