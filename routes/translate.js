import { Router } from 'express';

import { validator } from '#validators/index.js';
import { handler } from '#handlers/index.js';
import { controller } from '#controllers/index.js';

const router = Router();

router
	.route('/translate')
	.post(validator.translate.getTranslatedText, controller.translate.getTranslation)
	.all(handler.error._405);

export default router;
