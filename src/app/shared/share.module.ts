import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatTextPipe} from './pipe/format-text.pipe';
import { SafeUrlPipe } from './pipe/safe-url.pipe';



@NgModule({
  declarations: [FormatTextPipe, SafeUrlPipe],
  exports: [FormatTextPipe, SafeUrlPipe],
  imports: [
    CommonModule
  ]
})
export class ShareModule { }
