import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';
import { DragDropService } from "../drag-drop.service";
// 指令分为两种: 一种是结构(Structural)型指令和属性(Attribute)型指令
@Directive({
  selector: '[appDrag][dragTag][dragData][draggedClass]'
})
export class DragDirective {

  private _isDraggable = false;

  @Input('appDrag')
  set isDraggable(val: boolean) {
    this._isDraggable = val;
    this.rd.setAttribute(this.el.nativeElement, 'draggable', `${val}`);
  }
  get isDraggable() {
    return this._isDraggable;
  }

  @Input() draggedClass: string;
  @Input() dragTag: string;
  @Input() dragData: any;

  constructor(private el: ElementRef, private rd: Renderer2, private service: DragDropService) {
  }

  @HostListener('dragstart', ['$event'])
  onDragStart(ev: Event) {
    if (this.el.nativeElement === ev.target) {
      this.rd.addClass(this.el.nativeElement, this.draggedClass);
      this.service.setDragData({tag: this.dragTag, data: this.dragData});
    }
  }

  @HostListener('dragend', ['$event'])
  onDragEnd(ev: Event) {
    if (this.el.nativeElement === ev.target) {
      this.rd.removeClass(this.el.nativeElement, this.draggedClass);
    }
  }
}
