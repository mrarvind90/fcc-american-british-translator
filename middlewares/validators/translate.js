import { checkSchema, validationResult } from 'express-validator';

import logger from '#config/logger.js';

export const validationChain = (req) => {
	return checkSchema(
		{
			locale: {
				exists: {
					bail: true,
					errorMessage: 'Required field(s) missing',
				},
				isIn: {
					options: [['american-to-british', 'british-to-american']],
					errorMessage: 'Invalid value for locale field',
				},
			},
			text: {
				exists: {
					bail: true,
					errorMessage: 'Required field(s) missing',
				},
				isValidText: {
					bail: true,
					custom: (text) => typeof text === 'string' && !['', null].includes(text),
					errorMessage: 'No text to translate',
				},
			},
		},
		['body'],
	).run(req);
};

export const getValidationResults = (req) => {
	return validationResult(req);
};

export const formatValidationErrorMsg = (req, result) => {
	const statusCode = 422;
	const errors = result.array();

	logger.error(
		`${statusCode} ${req.method} ${req.path}${' ' + JSON.stringify(req.body) || ''} - ${JSON.stringify(errors[0])}`,
	);

	return { statusCode, error: errors[0].msg };
};

export const getTranslatedText = async (req, res, next) => {
	await validationChain(req);

	const result = getValidationResults(req);

	if (!result.isEmpty()) {
		const payload = formatValidationErrorMsg(req, result);

		return res.status(payload.statusCode).json({ error: payload.error });
	}

	return next();
};
