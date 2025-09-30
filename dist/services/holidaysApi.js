"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getColombiaHolidays = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
let holidaysApiUrl = process.env.HOLIDAYS_API_URL;
const getColombiaHolidays = async () => {
    if (!holidaysApiUrl)
        throw new Error('API URL not found.');
    const response = await fetch(holidaysApiUrl);
    if (!response.ok) {
        throw new Error('Unexpected error.');
    }
    const data = await response.json();
    return data;
};
exports.getColombiaHolidays = getColombiaHolidays;
//# sourceMappingURL=holidaysApi.js.map