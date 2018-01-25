import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-comfirm-dialog',
  template: `
    <h3 matDialogTitle>{{title}}</h3>
    <mat-dialog-content>
      {{content}}
    </mat-dialog-content>

    <mat-dialog-actions>
      <button mat-raised-button color="primary" (click)="onClick(true)">确定</button>
      <button mat-button matDialogClose (click)="onClick(false)">取消</button>
    </mat-dialog-actions>
  `,
  styles: []
})
export class ComfirmDialogComponent implements OnInit {

  private title = '';
  private content = '';
  constructor(
    private dialogRef: MatDialogRef<ComfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data
  ) { }

  ngOnInit() {
    this.title = this.data.title;
    this.content = this.data.content;
  }

  onClick(result: boolean) {
    this.dialogRef.close(result);
  }
}
