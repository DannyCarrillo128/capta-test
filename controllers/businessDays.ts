import { Request, Response } from 'express';

import { convertToISOFormat } from '../helpers/convertToISOFormat';
import { addBusinessHours } from '../helpers/addBusinessHours';
import type { DateParams } from '../interfaces/DateParams';

export const getBusinessDays = async (req: Request<{}, {}, {}, DateParams>, res: Response): Promise<void> => {

  try {
    const days: number = parseInt(req.query.days ?? '0');
    const hours: number = parseInt(req.query.hours ?? '0');

    let date: string;

    if (!req.query.date) {
      date = convertToISOFormat(new Date());
    } else {
      date = convertToISOFormat(new Date(req.query.date));
    }
    
    const totalHours: number = (days * 8) + hours;
    const businessDate = await addBusinessHours(date, totalHours);

    res.json({
      date: businessDate
    });
  } catch (err: unknown) {
    console.log(err);

    res.status(500).json({
      error: 'InternalError',
      message: 'Unexpected error.'
    });
  }

};
