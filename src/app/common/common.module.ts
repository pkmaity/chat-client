import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  imports: [
    NzInputModule,
    NzButtonModule,
    NzGridModule
  ],
  exports: [
    NzInputModule,
    NzButtonModule,
    NzGridModule
  ]
})
export class CommonModules { }
