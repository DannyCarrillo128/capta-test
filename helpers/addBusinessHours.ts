import { isHolidayOrWeekend } from './isHolidayOrWeekend';

export const addBusinessHours = async (date: string, hours: number): Promise<Date> => {
  let remainingHours: number = hours;
  let currentDate: Date = new Date(date);
  
  while (remainingHours > 0) {
    if (await isHolidayOrWeekend(currentDate)) {
      currentDate = await getNextBusinessDay(currentDate);
    }
    else {
      const currentHour: number = currentDate.getUTCHours();
      let temp: Date = new Date(currentDate);
      
      if (currentHour >= 8 && currentHour < 12) {
        temp.setUTCHours(12, 0, 0, 0);
        let noon = temp.getTime();
        
        let remainingMilliseconds: number = noon - currentDate.getTime();
        const hoursUntilNoon: number = remainingMilliseconds / 1000 / 60 / 60;
        const hoursToAdvance: number = Math.min(remainingHours, hoursUntilNoon);
        const millisecondsToAdvance: number = hoursToAdvance * 1000 * 60 * 60;
        currentDate.setUTCMilliseconds(currentDate.getMilliseconds() + millisecondsToAdvance);

        remainingHours -= hoursToAdvance;
      }
      else if (currentHour >= 13 && currentHour < 17) {
        temp.setUTCHours(17, 0, 0, 0);
        let endOfDay = temp.getTime();

        let remainingMilliseconds: number = endOfDay - currentDate.getTime();
        const hoursUntilEndOfDay: number = remainingMilliseconds / 1000 / 60 / 60;
        const hoursToAdvance: number = Math.min(remainingHours, hoursUntilEndOfDay);
        const millisecondsToAdvance: number = hoursToAdvance * 1000 * 60 * 60;
        currentDate.setUTCMilliseconds(currentDate.getMilliseconds() + millisecondsToAdvance);
        
        remainingHours -= hoursToAdvance;
      }
      else if (currentHour >= 12 && currentHour < 13) {
        currentDate.setUTCHours(13, 0, 0, 0);
      }
      else {
        currentDate = await getNextBusinessDay(currentDate);
      }
    }
  }

  
  return new Date(currentDate.setUTCHours(currentDate.getUTCHours() + 5));
};

const getNextBusinessDay = async (date: Date): Promise<Date> => {
  const nextDay: Date = new Date(date);
  nextDay.setUTCDate(date.getUTCDate() + 1);
  nextDay.setUTCHours(8, 0, 0, 0);

  while (await isHolidayOrWeekend(nextDay)) {
    nextDay.setUTCDate(nextDay.getUTCDate() + 1);
  }
  
  return nextDay;
};
