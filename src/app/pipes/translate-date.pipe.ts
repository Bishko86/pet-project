import { DatePipe } from '@angular/common';
import {Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translateDate',
})
export class TranslateDatePipe implements PipeTransform {
  constructor(date: DatePipe){}
  transform(value: string|null): string {
    if(!value) return ''
    return value
  }

}
