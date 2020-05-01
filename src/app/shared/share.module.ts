import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatTextPipe} from './pipe/format-text.pipe';



@NgModule({
  declarations: [FormatTextPipe],
  exports: [FormatTextPipe],
  imports: [
    CommonModule
  ]
})
export class ShareModule { }
