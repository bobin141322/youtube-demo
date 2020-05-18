import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatTextPipe} from './pipe/format-text.pipe';
import { SafeUrlPipe } from './pipe/safe-url.pipe';
import { FormsModule,
  ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FormatTextPipe, SafeUrlPipe],
  exports: [FormatTextPipe, SafeUrlPipe, FormsModule],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ShareModule { }
