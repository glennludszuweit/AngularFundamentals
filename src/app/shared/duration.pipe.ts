import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case 1:
        return '30 minutes';
      case 2:
        return '1 hour';
      case 3:
        return '4 hours';
      case 4:
        return '8 hours';
      default:
        return value.toString();
    }
  }
}
