"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const businessDays_1 = require("../controllers/businessDays");
const dateValidation_1 = require("../middlewares/dateValidation");
const router = (0, express_1.Router)();
router.get('/', [dateValidation_1.dateValidation], businessDays_1.getBusinessDays);
exports.default = router;
//# sourceMappingURL=businessDays.js.map