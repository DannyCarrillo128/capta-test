"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHolidayOrWeekend = void 0;
const holidaysApi_1 = require("../services/holidaysApi");
const holidaysApiResponse = (0, holidaysApi_1.getColombiaHolidays)();
const isHolidayOrWeekend = async (date) => {
    const weekday = date.getUTCDay();
    if (weekday === 0 || weekday === 6) {
        return true;
    }
    const colombiaHolidays = await holidaysApiResponse;
    const stringDate = date.toISOString().split('T')[0];
    return colombiaHolidays.includes(stringDate);
};
exports.isHolidayOrWeekend = isHolidayOrWeekend;
//# sourceMappingURL=isHolidayOrWeekend.js.map