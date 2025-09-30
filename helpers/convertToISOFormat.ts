// Convert a date to ISO 8601 (Colombian timezone).
export const convertToISOFormat = (date: Date): string => {
  return date.toLocaleString('sv-SE', {
    timeZone: 'America/Bogota'
  }).replace(' ', 'T') + 'Z';
};
