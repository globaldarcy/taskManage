import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatListModule,
  MatFormFieldModule,
  MatSlideToggleModule,
  MatGridListModule,
  MatDialogModule,
  MatAutocompleteModule,
  MatMenuModule,
  MatCheckboxModule,
  MatTooltipModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSidenavModule,
  MatSelectModule, MatButtonToggleModule
} from '@angular/material';
import { ComfirmDialogComponent } from './comfirm-dialog/comfirm-dialog.component';
import { DirectiveModule } from "../directive/directive.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ImageListSelectComponent } from './image-list-select/image-list-select.component';
import { AgeInputComponent } from './age-input/age-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSidenavModule,
    MatSelectModule,
    DirectiveModule,
    MatButtonToggleModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSidenavModule,
    MatSelectModule,
    DirectiveModule,
    ImageListSelectComponent,
    AgeInputComponent,
    MatButtonToggleModule
  ],
  entryComponents: [ComfirmDialogComponent],
  declarations: [ComfirmDialogComponent, ImageListSelectComponent, AgeInputComponent]
})
export class SharedModule { }
