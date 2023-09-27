// noinspection DuplicatedCode

import chai from 'chai';
import chai_http from 'chai-http';
import { suite, test } from 'mocha';
import server from '../server.js';

chai.use(chai_http);
const { assert } = chai;

suite('Functional Tests', () => {
	test('POST /api/translate with valid text and locale fields', () => {
		const inputPayload1 = {
			locale: 'american-to-british',
			text: 'Can you toss this in the trashcan for me?',
		};
		const expectedOutput1 = {
			text: 'Can you toss this in the trashcan for me?',
			translation: 'Can you toss this in the <span class="highlight">bin</span> for me?',
		};

		chai.request(server)
			.post('/api/translate')
			.set('content-type', 'application/json')
			.send(inputPayload1)
			.end((req, res) => {
				assert.equal(res.status, 200);
				assert.deepStrictEqual(res.body, expectedOutput1);
			});

		const inputPayload2 = {
			locale: 'british-to-american',
			text: 'Paracetamol takes up to an hour to work.',
		};
		const expectedOutput2 = {
			text: 'Paracetamol takes up to an hour to work.',
			translation: '<span class="highlight">Tylenol</span> takes up to an hour to work.',
		};

		chai.request(server)
			.post('/api/translate')
			.set('content-type', 'application/json')
			.send(inputPayload2)
			.end((req, res) => {
				assert.equal(res.status, 200);
				assert.deepStrictEqual(res.body, expectedOutput2);
			});
	});

	test('POST /api/translate with valid text and invalid locale fields', () => {
		const inputPayload = {
			locale: 'american-to-korean',
			text: 'Mangoes are my favorite fruit.',
		};
		const expectedOutput = {
			error: 'Invalid value for locale field',
		};

		chai.request(server)
			.post('/api/translate')
			.set('content-type', 'application/json')
			.send(inputPayload)
			.end((req, res) => {
				assert.equal(res.status, 422);
				assert.deepStrictEqual(res.body, expectedOutput);
			});
	});

	test('POST /api/translate with missing text and valid locale fields', () => {
		const inputPayload = {
			locale: 'british-to-american',
		};
		const expectedOutput = {
			error: 'Required field(s) missing',
		};

		chai.request(server)
			.post('/api/translate')
			.set('content-type', 'application/json')
			.send(inputPayload)
			.end((req, res) => {
				assert.equal(res.status, 422);
				assert.deepStrictEqual(res.body, expectedOutput);
			});
	});

	test('POST /api/translate with valid text and missing locale fields', () => {
		const inputPayload = {
			text: 'I ate yogurt for breakfast.',
		};
		const expectedOutput = {
			error: 'Required field(s) missing',
		};

		chai.request(server)
			.post('/api/translate')
			.set('content-type', 'application/json')
			.send(inputPayload)
			.end((req, res) => {
				assert.equal(res.status, 422);
				assert.deepStrictEqual(res.body, expectedOutput);
			});
	});

	test('POST /api/translate with empty text and valid locale fields', () => {
		const inputPayload = {
			locale: 'british-to-american',
			text: '',
		};
		const expectedOutput = {
			error: 'No text to translate',
		};

		chai.request(server)
			.post('/api/translate')
			.set('content-type', 'application/json')
			.send(inputPayload)
			.end((req, res) => {
				assert.equal(res.status, 422);
				assert.deepStrictEqual(res.body, expectedOutput);
			});
	});

	test('POST /api/translate with valid text and locale fields that require no translation', () => {
		const inputPayload1 = {
			locale: 'american-to-british',
			text: 'Tea time is usually around 4 or 4.30.',
		};
		const expectedOutput1 = {
			text: 'Tea time is usually around 4 or 4.30.',
			translation: 'Everything looks good to me!',
		};

		chai.request(server)
			.post('/api/translate')
			.set('content-type', 'application/json')
			.send(inputPayload1)
			.end((req, res) => {
				assert.equal(res.status, 200);
				assert.deepStrictEqual(res.body, expectedOutput1);
			});

		const inputPayload2 = {
			locale: 'british-to-american',
			text: 'Mangoes are my favorite fruit.',
		};
		const expectedOutput2 = {
			text: 'Mangoes are my favorite fruit.',
			translation: 'Everything looks good to me!',
		};

		chai.request(server)
			.post('/api/translate')
			.set('content-type', 'application/json')
			.send(inputPayload2)
			.end((req, res) => {
				assert.equal(res.status, 200);
				assert.deepStrictEqual(res.body, expectedOutput2);
			});
	});
});
