import { trigger, stagger, transition, style, animate, query } from '@angular/animations';

export const listAnim = trigger('listAni', [
  transition('* => *', [
    query(':enter', style({opacity: 0}), {optional: true}),
    query(':enter', stagger(100, [
      animate('1s', style({opacity: 1}))
    ]), {optional: true}),
    query(':leave', style({opacity: 1}), {optional: true}),
    query(':leave', stagger(100, [
      animate('1s', style({opacity: 0}))
    ]), {optional: true}),
  ])
]);
