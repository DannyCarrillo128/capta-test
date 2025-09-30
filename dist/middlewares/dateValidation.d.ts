import { NextFunction, Request, Response } from 'express';
import type { DateParams } from '../interfaces/DateParams';
export declare const dateValidation: (req: Request<{}, {}, {}, DateParams>, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=dateValidation.d.ts.map