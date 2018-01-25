import { trigger, state, transition, style, animate } from '@angular/animations';

export const cardAnim = trigger('cardAni', [
  state('out', style({transform: 'scale(1)', 'box-shadow': 'none'})),
  state('hover', style({transform: 'scale(1.02)', 'box-shadow': '0px 0px 5px 5px #ff4081'})),
  transition('out => hover', animate('100ms ease-in')),
  transition('hover => out', animate('100ms ease-out'))
]);
