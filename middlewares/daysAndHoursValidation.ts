import { NextFunction, Request, Response } from 'express';

import { DateParams } from '../interfaces/DateParams';

export const daysAndHoursValidation = (
  req: Request<{}, {}, {}, DateParams>,
  res: Response,
  next: NextFunction
): Response<any, Record<string, any>> | undefined => {
  let errorMessage: string = '';

  if (req.query.days) {
    const days: number = parseInt(req.query.days);

    if (isNaN(days) || days < 0) {
      errorMessage = `Parameter 'days' must be a positive integer.`;
    }
  }

  if (req.query.hours) {
    const hours: number = parseInt(req.query.hours);

    if (isNaN(hours) || hours < 0) {
      errorMessage = errorMessage.concat(' ', `Parameter 'hours' must be a positive integer.`);
    }
  }

  if (errorMessage.length > 0) {
    return res.status(400).json({
      error: 'InvalidParameters',
      message: errorMessage.trim()
    });
  }

  next();
};