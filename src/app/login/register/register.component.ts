import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private items: string[] = [];
  private nums = 16;

  constructor() { }

  ngOnInit() {
    for (let i = 1; i <= this.nums; i++) {
      this.items.push(`avatars:svg-${i}`);
    }
  }

}
