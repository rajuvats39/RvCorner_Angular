import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileSizePipe } from './file-size.pipe';
import { PrettyPrintPipe } from './pretty-print.pipe';
import { TempConverterPipe } from './temp-converter.pipe';

@NgModule({
  declarations: [
    FileSizePipe,
    PrettyPrintPipe,
    TempConverterPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FileSizePipe,
    PrettyPrintPipe,
    TempConverterPipe
  ]
})
export class PipesModule { }
