"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateValidation = void 0;
const dateValidation = (req, res, next) => {
    if (req.query.date && isNaN(new Date(req.query.date).getTime())) {
        return res.status(400).json({
            error: 'InvalidParameters',
            message: 'Invalid date format.'
        });
    }
    next();
};
exports.dateValidation = dateValidation;
//# sourceMappingURL=dateValidation.js.map