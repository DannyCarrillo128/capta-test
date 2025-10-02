import { NextFunction, Request, Response } from 'express';

import type { DateParams } from '../interfaces/DateParams';

export const dateValidation = (
  req: Request<{}, {}, {}, DateParams>,
  res: Response,
  next: NextFunction
): Response<any, Record<string, any>> | undefined => {
  if (req.query.date && isNaN(new Date(req.query.date).getTime())) {
    return res.status(400).json({
      error: 'InvalidParameters',
      message: 'Invalid date format.'
    });
  }

  next();
};
