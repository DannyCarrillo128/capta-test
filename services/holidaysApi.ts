import dotenv from 'dotenv';

dotenv.config();

let holidaysApiUrl = process.env.HOLIDAYS_API_URL;

export const getColombiaHolidays = async (): Promise<string[]> => {
  if (!holidaysApiUrl) throw new Error('API URL not found.');

  const response = await fetch(holidaysApiUrl);

  if (!response.ok) {
    throw new Error('Unexpected error.');
  }

  const data: string[] = await response.json();

  return data;
};
