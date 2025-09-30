import { getColombiaHolidays } from '../services/holidaysApi';

const holidaysApiResponse: Promise<string[]> = getColombiaHolidays();

export const isHolidayOrWeekend = async (date: Date): Promise<boolean> => {
  const weekday = date.getUTCDay();

  if (weekday === 0 || weekday === 6) {
    return true;
  }
  
  const colombiaHolidays: string[] = await holidaysApiResponse;
  const stringDate: string = date.toISOString().split('T')[0]!;
  
  return colombiaHolidays.includes(stringDate);
}
