import { Component, Inject } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

// import { trigger, state, transition, style, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  /*animations: [
    trigger('square', [
      state('green', style({'background-color': 'green', 'height': '100px', 'transform': 'translateY(-100%)'})),
      state('red', style({'background-color': 'red', 'height': '100px', 'transform': 'translateY(100%)'})),
      // transition('green => red', animate(1000)),
      transition('green => red', animate('.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)')),
      transition('red => green', animate('.5s cubic-bezier(.17,.67,.94,-0.02)'))
    ])
  ]*/
})
export class AppComponent {

  // squareState: string;

  public darkTheme = false;

  constructor(private oc: OverlayContainer, @Inject('BASE_CONFIG') config) {
    console.log(config);
  }

  switchTheme(dark) {
    this.darkTheme = dark;
    this.oc.getContainerElement().classList.add(dark ? 'myapp-dark-theme' : null);
  }

  /*onClick() {
    this.squareState = this.squareState === 'green' ? 'red' : 'green';
  }*/
}

