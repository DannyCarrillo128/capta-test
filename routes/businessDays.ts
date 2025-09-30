import { Router } from 'express';

import { getBusinessDays } from '../controllers/businessDays';
import { dateValidation } from '../middlewares/dateValidation';

const router: Router = Router();

router.get('/', [dateValidation], getBusinessDays);

export default router;
