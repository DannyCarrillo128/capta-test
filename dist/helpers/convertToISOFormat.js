"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToISOFormat = void 0;
// Convert a date to ISO 8601 (Colombian timezone).
const convertToISOFormat = (date) => {
    return date.toLocaleString('sv-SE', {
        timeZone: 'America/Bogota'
    }).replace(' ', 'T') + 'Z';
};
exports.convertToISOFormat = convertToISOFormat;
//# sourceMappingURL=convertToISOFormat.js.map