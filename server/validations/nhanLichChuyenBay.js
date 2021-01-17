const { validate, ValidationError, Joi } = require('express-validation');

const nhanLichChuyenBayValidation = {
    body: Joi.object({
        MaChuyenBay: Joi.string()
            .max(10)
            .required(),
        SanBayDi: Joi.string()
            .max(10)
            .required(),
        SanBayDen: Joi.string()
            .max(10)
            .required(),
        NgayGio: Joi.string()
            .required(),
    }),
}

module.exports = nhanLichChuyenBayValidation;