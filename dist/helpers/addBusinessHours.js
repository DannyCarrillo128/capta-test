"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBusinessHours = void 0;
const isHolidayOrWeekend_1 = require("./isHolidayOrWeekend");
const addBusinessHours = async (date, hours) => {
    let remainingHours = hours;
    let currentDate = new Date(date);
    while (remainingHours > 0) {
        if (await (0, isHolidayOrWeekend_1.isHolidayOrWeekend)(currentDate)) {
            currentDate = await getNextBusinessDay(currentDate);
        }
        else {
            const currentHour = currentDate.getUTCHours();
            let temp = new Date(currentDate);
            if (currentHour >= 8 && currentHour < 12) {
                temp.setUTCHours(12, 0, 0, 0);
                let noon = temp.getTime();
                let remainingMilliseconds = noon - currentDate.getTime();
                const hoursUntilNoon = remainingMilliseconds / 1000 / 60 / 60;
                const hoursToAdvance = Math.min(remainingHours, hoursUntilNoon);
                const millisecondsToAdvance = hoursToAdvance * 1000 * 60 * 60;
                currentDate.setUTCMilliseconds(currentDate.getMilliseconds() + millisecondsToAdvance);
                remainingHours -= hoursToAdvance;
            }
            else if (currentHour >= 13 && currentHour < 17) {
                temp.setUTCHours(17, 0, 0, 0);
                let endOfDay = temp.getTime();
                let remainingMilliseconds = endOfDay - currentDate.getTime();
                const hoursUntilEndOfDay = remainingMilliseconds / 1000 / 60 / 60;
                const hoursToAdvance = Math.min(remainingHours, hoursUntilEndOfDay);
                const millisecondsToAdvance = hoursToAdvance * 1000 * 60 * 60;
                currentDate.setUTCMilliseconds(currentDate.getMilliseconds() + millisecondsToAdvance);
                remainingHours -= hoursToAdvance;
            }
            else if (currentHour >= 12 && currentHour < 13) {
                currentDate.setUTCHours(13, 0, 0, 0);
            }
            else {
                currentDate = await getNextBusinessDay(currentDate);
            }
        }
    }
    return new Date(currentDate.setUTCHours(currentDate.getUTCHours() + 5));
};
exports.addBusinessHours = addBusinessHours;
const getNextBusinessDay = async (date) => {
    const nextDay = new Date(date);
    nextDay.setUTCDate(date.getUTCDate() + 1);
    nextDay.setUTCHours(8, 0, 0, 0);
    while (await (0, isHolidayOrWeekend_1.isHolidayOrWeekend)(nextDay)) {
        nextDay.setUTCDate(nextDay.getUTCDate() + 1);
    }
    return nextDay;
};
//# sourceMappingURL=addBusinessHours.js.map