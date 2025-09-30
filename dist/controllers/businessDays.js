"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBusinessDays = void 0;
const convertToISOFormat_1 = require("../helpers/convertToISOFormat");
const addBusinessHours_1 = require("../helpers/addBusinessHours");
const getBusinessDays = async (req, res) => {
    try {
        const daysParam = req.query.days ? req.query.days : '0';
        const hoursParam = req.query.hours ? req.query.hours : '0';
        let date;
        if (!req.query.date) {
            date = (0, convertToISOFormat_1.convertToISOFormat)(new Date());
        }
        else {
            date = (0, convertToISOFormat_1.convertToISOFormat)(new Date(req.query.date));
        }
        const days = parseInt(daysParam);
        const hours = parseInt(hoursParam);
        if (isNaN(days) || isNaN(hours)) {
            res.status(400).json({
                error: 'InvalidParameters',
                message: `Parameters 'days' and 'hours' must be positive integers.`
            });
            return;
        }
        const totalHours = (days * 8) + hours;
        const businessDate = await (0, addBusinessHours_1.addBusinessHours)(date, totalHours);
        res.json({
            date: businessDate
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            error: 'InternalError',
            message: 'Unexpected error.'
        });
    }
};
exports.getBusinessDays = getBusinessDays;
//# sourceMappingURL=businessDays.js.map