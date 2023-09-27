import { americanToBritishSpelling } from '../constants/american-to-british-spelling.js';
import { americanToBritishTitles } from '../constants/american-to-british-titles.js';
import { americanOnlyWordMappings } from '../constants/american-only.js';
import { britishOnlyWordMapping } from '../constants/british-only.js';
import { matchLetterCasing } from '../helpers/word.js';

const AMERICAN_TO_BRITISH = 'american-to-british';
const BRITISH_TO_AMERICAN = 'british-to-american';

const formatTimeUnits = (locale, untranslatedStr) => {
	const localeMappings = {
		'american-to-british': (string) => string.replace(/(\d{1,2}):(\d{2})/g, highlightTranslatedWord('$1.$2')),
		'british-to-american': (string) => string.replace(/(\d{1,2}).(\d{2})/g, highlightTranslatedWord('$1:$2')),
	};

	return localeMappings[locale](untranslatedStr);
};

const translationReducer = (translationMappings, locale, word) =>
	Object.entries(translationMappings).reduce((acc, curr) => {
		let matchedStr;

		switch (locale) {
			case AMERICAN_TO_BRITISH:
				matchedStr = acc.toLowerCase() === curr[0] ? curr[1] : acc;
				break;
			case BRITISH_TO_AMERICAN:
				matchedStr = acc.toLowerCase() === curr[1] ? curr[0] : acc;
				break;
			default:
				throw new Error(`${locale} is not a valid locale value`);
		}

		return matchLetterCasing(word, matchedStr);
	}, word);

const translateTitles = (locale, word) => translationReducer(americanToBritishTitles, locale, word);

const translateSpellings = (locale, word) => translationReducer(americanToBritishSpelling, locale, word);

const translateLocaleUniqueWords = (locale, word) => {
	const translationMappings = locale === AMERICAN_TO_BRITISH ? americanOnlyWordMappings : britishOnlyWordMapping;

	const mappings = Object.keys(translationMappings);
	const regex = new RegExp(`\\b(${mappings.join('|')})\\b`, 'gi');

	return word.replace(regex, (match) => {
		const matchedStr = matchLetterCasing(match, translationMappings[match.toLowerCase()]);

		return highlightTranslatedWord(matchedStr);
	});
};

const highlightTranslatedWord = (word) => {
	return `<span class="highlight">${word}</span>`;
};

export const getTranslatedText = (untranslatedString, locale) => {
	const translatedText = [];

	for (const word of untranslatedString.split(' ')) {
		let translatedTitle = translateTitles(locale, word);
		if (word !== translatedTitle) {
			translatedTitle = highlightTranslatedWord(translatedTitle);
			translatedText.push(translatedTitle);
			continue;
		}

		let translatedSpelling = translateSpellings(locale, word);
		if (word !== translatedSpelling) {
			translatedSpelling = highlightTranslatedWord(translatedSpelling);
			translatedText.push(translatedSpelling);
			continue;
		}

		translatedText.push(word);
	}

	return [translatedText.join(' ')]
		.map((string) => formatTimeUnits(locale, string))
		.map((string) => translateLocaleUniqueWords(locale, string))[0];
};

export const getTranslation = (req, res) => {
	const untranslatedString = req.body.text;
	const { locale } = req.body;

	const translation = getTranslatedText(untranslatedString, locale);

	if (translation === untranslatedString) {
		return res.status(200).json({ text: req.body.text, translation: 'Everything looks good to me!' });
	}

	return res.status(200).json({ text: req.body.text, translation });
};
