import {Pipe, PipeTransform} from '@angular/core';

import * as dayjs from 'dayjs';
import * as timezone from 'dayjs/plugin/timezone';
import * as utc from 'dayjs/plugin/utc';

@Pipe({
  name: 'datetime',
  standalone: true
})
export class DatetimePipe implements PipeTransform {
  transform(day: dayjs.Dayjs | null | undefined): string {
    dayjs.extend(timezone);
    dayjs.extend(utc);

    if (!day  || !day.isValid()) {
      return ' - ';
    }

    day = dayjs.tz(dayjs.utc(day), dayjs.tz.guess());
    day = dayjs(day, 'YYYY-MM-DD');
    return day.format('DD/MM/YYYY');
  }
}
