// noinspection SpellCheckingInspection

import { suite, test } from 'mocha';
import chai from 'chai';
import { getTranslatedText } from '#controllers/translate.js';

const { assert } = chai;

suite('Unit Tests', () => {
	test('Translate [Mangoes are my favorite fruit.] to British English', () => {
		const expectedOutput = 'Mangoes are my <span class="highlight">favourite</span> fruit.';
		const req = {
			body: {
				locale: 'american-to-british',
				text: 'Mangoes are my favorite fruit.',
			},
		};

		const translation = getTranslatedText(req.body.text, req.body.locale);
		assert.strictEqual(
			translation,
			expectedOutput,
			`The sentence '${req.body.text}' should be translated to '${expectedOutput}' when locale is '${req.body.locale}'`,
		);
	});

	test('Translate [I ate yogurt for breakfast.] to British English', () => {
		const expectedOutput = 'I ate <span class="highlight">yoghurt</span> for breakfast.';
		const req = {
			body: {
				locale: 'american-to-british',
				text: 'I ate yogurt for breakfast.',
			},
		};

		const translation = getTranslatedText(req.body.text, req.body.locale);
		assert.strictEqual(
			translation,
			expectedOutput,
			`The sentence '${req.body.text}' should be translated to '${expectedOutput}' when locale is '${req.body.locale}'`,
		);
	});

	test("Translate [We had a party at my friend's condo.] to British English", () => {
		const expectedOutput = 'We had a party at my friend\'s <span class="highlight">flat</span>.';
		const req = {
			body: {
				locale: 'american-to-british',
				text: "We had a party at my friend's condo.",
			},
		};

		const translation = getTranslatedText(req.body.text, req.body.locale);
		assert.strictEqual(
			translation,
			expectedOutput,
			`The sentence '${req.body.text}' should be translated to '${expectedOutput}' when locale is '${req.body.locale}'`,
		);
	});

	test('Translate [Can you toss this in the trashcan for me?] to British English', () => {
		const expectedOutput = 'Can you toss this in the <span class="highlight">bin</span> for me?';
		const req = {
			body: {
				locale: 'american-to-british',
				text: 'Can you toss this in the trashcan for me?',
			},
		};

		const translation = getTranslatedText(req.body.text, req.body.locale);
		assert.strictEqual(
			translation,
			expectedOutput,
			`The sentence '${req.body.text}' should be translated to '${expectedOutput}' when locale is '${req.body.locale}'`,
		);
	});

	test('Translate [The parking lot was full.] to British English', () => {
		const expectedOutput = 'The <span class="highlight">car park</span> was full.';
		const req = {
			body: {
				locale: 'american-to-british',
				text: 'The parking lot was full.',
			},
		};

		const translation = getTranslatedText(req.body.text, req.body.locale);
		assert.strictEqual(
			translation,
			expectedOutput,
			`The sentence '${req.body.text}' should be translated to '${expectedOutput}' when locale is '${req.body.locale}'`,
		);
	});

	test('Translate [Like a high tech Rube Goldberg machine.] to British English', () => {
		const expectedOutput = 'Like a high tech <span class="highlight">Heath Robinson device</span>.';
		const req = {
			body: {
				locale: 'american-to-british',
				text: 'Like a high tech Rube Goldberg machine.',
			},
		};

		const translation = getTranslatedText(req.body.text, req.body.locale);
		assert.strictEqual(
			translation,
			expectedOutput,
			`The sentence '${req.body.text}' should be translated to '${expectedOutput}' when locale is '${req.body.locale}'`,
		);
	});

	test('Translate [To play hooky means to skip class or work.] to British English', () => {
		const expectedOutput = 'To <span class="highlight">bunk off</span> means to skip class or work.';
		const req = {
			body: {
				locale: 'american-to-british',
				text: 'To play hooky means to skip class or work.',
			},
		};

		const translation = getTranslatedText(req.body.text, req.body.locale);
		assert.strictEqual(
			translation,
			expectedOutput,
			`The sentence '${req.body.text}' should be translated to '${expectedOutput}' when locale is '${req.body.locale}'`,
		);
	});

	test('Translate [No Mr. Bond, I expect you to die.] to British English', () => {
		const expectedOutput = 'No <span class="highlight">Mr</span> Bond, I expect you to die.';
		const req = {
			body: {
				locale: 'american-to-british',
				text: 'No Mr. Bond, I expect you to die.',
			},
		};

		const translation = getTranslatedText(req.body.text, req.body.locale);
		assert.strictEqual(
			translation,
			expectedOutput,
			`The sentence '${req.body.text}' should be translated to '${expectedOutput}' when locale is '${req.body.locale}'`,
		);
	});

	test('Translate [Dr. Grosh will see you now.] to British English', () => {
		const expectedOutput = '<span class="highlight">Dr</span> Grosh will see you now.';
		const req = {
			body: {
				locale: 'american-to-british',
				text: 'Dr. Grosh will see you now.',
			},
		};

		const translation = getTranslatedText(req.body.text, req.body.locale);
		assert.strictEqual(
			translation,
			expectedOutput,
			`The sentence '${req.body.text}' should be translated to '${expectedOutput}' when locale is '${req.body.locale}'`,
		);
	});

	test('Translate [Lunch is at 12:15 today.] to British English', () => {
		const expectedOutput = 'Lunch is at <span class="highlight">12.15</span> today.';
		const req = {
			body: {
				locale: 'american-to-british',
				text: 'Lunch is at 12:15 today.',
			},
		};

		const translation = getTranslatedText(req.body.text, req.body.locale);
		assert.strictEqual(
			translation,
			expectedOutput,
			`The sentence '${req.body.text}' should be translated to '${expectedOutput}' when locale is '${req.body.locale}'`,
		);
	});

	test('Translate [We watched the footie match for a while.] to American English', () => {
		const expectedOutput = 'We watched the <span class="highlight">soccer</span> match for a while.';
		const req = {
			body: {
				locale: 'british-to-american',
				text: 'We watched the footie match for a while.',
			},
		};

		const translation = getTranslatedText(req.body.text, req.body.locale);
		assert.strictEqual(
			translation,
			expectedOutput,
			`The sentence '${req.body.text}' should be translated to '${expectedOutput}' when locale is '${req.body.locale}'`,
		);
	});

	test('Translate [Paracetamol takes up to an hour to work.] to American English', () => {
		const expectedOutput = '<span class="highlight">Tylenol</span> takes up to an hour to work.';
		const req = {
			body: {
				locale: 'british-to-american',
				text: 'Paracetamol takes up to an hour to work.',
			},
		};

		const translation = getTranslatedText(req.body.text, req.body.locale);
		assert.strictEqual(
			translation,
			expectedOutput,
			`The sentence '${req.body.text}' should be translated to '${expectedOutput}' when locale is '${req.body.locale}'`,
		);
	});

	test('Translate [First, caramelise the onions.] to American English', () => {
		const expectedOutput = 'First, <span class="highlight">caramelize</span> the onions.';
		const req = {
			body: {
				locale: 'british-to-american',
				text: 'First, caramelise the onions.',
			},
		};

		const translation = getTranslatedText(req.body.text, req.body.locale);
		assert.strictEqual(
			translation,
			expectedOutput,
			`The sentence '${req.body.text}' should be translated to '${expectedOutput}' when locale is '${req.body.locale}'`,
		);
	});

	test('Translate [I spent the bank holiday at the funfair.] to American English', () => {
		const expectedOutput =
			'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.';
		const req = {
			body: {
				locale: 'british-to-american',
				text: 'I spent the bank holiday at the funfair.',
			},
		};

		const translation = getTranslatedText(req.body.text, req.body.locale);
		assert.strictEqual(
			translation,
			expectedOutput,
			`The sentence '${req.body.text}' should be translated to '${expectedOutput}' when locale is '${req.body.locale}'`,
		);
	});

	test('Translate [I had a bicky then went to the chippy.] to American English', () => {
		const expectedOutput =
			'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.';
		const req = {
			body: {
				locale: 'british-to-american',
				text: 'I had a bicky then went to the chippy.',
			},
		};

		const translation = getTranslatedText(req.body.text, req.body.locale);
		assert.strictEqual(
			translation,
			expectedOutput,
			`The sentence '${req.body.text}' should be translated to '${expectedOutput}' when locale is '${req.body.locale}'`,
		);
	});

	test("Translate [I've just got bits and bobs in my bum bag.] to American English", () => {
		const expectedOutput =
			'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.';
		const req = {
			body: {
				locale: 'british-to-american',
				text: "I've just got bits and bobs in my bum bag.",
			},
		};

		const translation = getTranslatedText(req.body.text, req.body.locale);
		assert.strictEqual(
			translation,
			expectedOutput,
			`The sentence '${req.body.text}' should be translated to '${expectedOutput}' when locale is '${req.body.locale}'`,
		);
	});

	test('Translate [The car boot sale at Boxted Airfield was called off.] to American English', () => {
		const expectedOutput = 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.';
		const req = {
			body: {
				locale: 'british-to-american',
				text: 'The car boot sale at Boxted Airfield was called off.',
			},
		};

		const translation = getTranslatedText(req.body.text, req.body.locale);
		assert.strictEqual(
			translation,
			expectedOutput,
			`The sentence '${req.body.text}' should be translated to '${expectedOutput}' when locale is '${req.body.locale}'`,
		);
	});

	test('Translate [Have you met Mrs Kalyani?] to American English', () => {
		const expectedOutput = 'Have you met <span class="highlight">Mrs.</span> Kalyani?';
		const req = {
			body: {
				locale: 'british-to-american',
				text: 'Have you met Mrs Kalyani?',
			},
		};

		const translation = getTranslatedText(req.body.text, req.body.locale);
		assert.strictEqual(
			translation,
			expectedOutput,
			`The sentence '${req.body.text}' should be translated to '${expectedOutput}' when locale is '${req.body.locale}'`,
		);
	});

	test("Translate [Prof Joyner of King's College, London.] to American English", () => {
		const expectedOutput = '<span class="highlight">Prof.</span> Joyner of King\'s College, London.';
		const req = {
			body: {
				locale: 'british-to-american',
				text: "Prof Joyner of King's College, London.",
			},
		};

		const translation = getTranslatedText(req.body.text, req.body.locale);
		assert.strictEqual(
			translation,
			expectedOutput,
			`The sentence '${req.body.text}' should be translated to '${expectedOutput}' when locale is '${req.body.locale}'`,
		);
	});

	test('Translate [Tea time is usually around 4 or 4.30.] to American English', () => {
		const expectedOutput = 'Tea time is usually around 4 or <span class="highlight">4:30</span>.';
		const req = {
			body: {
				locale: 'british-to-american',
				text: 'Tea time is usually around 4 or 4.30.',
			},
		};

		const translation = getTranslatedText(req.body.text, req.body.locale);
		assert.strictEqual(
			translation,
			expectedOutput,
			`The sentence '${req.body.text}' should be translated to '${expectedOutput}' when locale is '${req.body.locale}'`,
		);
	});

	test('Highlight translation in [Mangoes are my favorite fruit.]', () => {
		const expectedOutput = 'Mangoes are my <span class="highlight">favourite</span> fruit.';
		const req = {
			body: {
				locale: 'american-to-british',
				text: 'Mangoes are my favorite fruit.',
			},
		};

		const translation = getTranslatedText(req.body.text, req.body.locale);
		assert.strictEqual(
			translation,
			expectedOutput,
			`The sentence '${req.body.text}' should be translated to '${expectedOutput}' when locale is '${req.body.locale}'`,
		);
	});

	test('Highlight translation in [I ate yogurt for breakfast.]', () => {
		const expectedOutput = 'I ate <span class="highlight">yoghurt</span> for breakfast.';
		const req = {
			body: {
				locale: 'american-to-british',
				text: 'I ate yogurt for breakfast.',
			},
		};

		const translation = getTranslatedText(req.body.text, req.body.locale);
		assert.strictEqual(
			translation,
			expectedOutput,
			`The sentence '${req.body.text}' should be translated to '${expectedOutput}' when locale is '${req.body.locale}'`,
		);
	});

	test('Highlight translation in [We watched the footie match for a while.]', () => {
		const expectedOutput = 'We watched the <span class="highlight">soccer</span> match for a while.';
		const req = {
			body: {
				locale: 'british-to-american',
				text: 'We watched the footie match for a while.',
			},
		};

		const translation = getTranslatedText(req.body.text, req.body.locale);
		assert.strictEqual(
			translation,
			expectedOutput,
			`The sentence '${req.body.text}' should be translated to '${expectedOutput}' when locale is '${req.body.locale}'`,
		);
	});

	test('Highlight translation in [Paracetamol takes up to an hour to work.]', () => {
		const expectedOutput = '<span class="highlight">Tylenol</span> takes up to an hour to work.';
		const req = {
			body: {
				locale: 'british-to-american',
				text: 'Paracetamol takes up to an hour to work.',
			},
		};

		const translation = getTranslatedText(req.body.text, req.body.locale);
		assert.strictEqual(
			translation,
			expectedOutput,
			`The sentence '${req.body.text}' should be translated to '${expectedOutput}' when locale is '${req.body.locale}'`,
		);
	});
});
