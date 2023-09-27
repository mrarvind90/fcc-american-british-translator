const isFirstLetterCapitalized = (word) => {
	return word.charCodeAt(0) >= 65 && word.charCodeAt(0) <= 90;
};

export const matchLetterCasing = (originalStr, newStr) => {
	return isFirstLetterCapitalized(originalStr) ? newStr.charAt(0).toUpperCase() + newStr.slice(1) : newStr;
};
