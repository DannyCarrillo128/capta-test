import { Router } from 'express';

import { getBusinessDays } from '../controllers/businessDays';
import { dateValidation } from '../middlewares/dateValidation';
import { daysAndHoursValidation } from '../middlewares/daysAndHoursValidation';

const router: Router = Router();

router.get('/', [daysAndHoursValidation, dateValidation], getBusinessDays);

export default router;
