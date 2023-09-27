const form = document.getElementById('form');
const resultsElement = document.getElementById('results');
const errorMsgElement = document.getElementById('error-msg');

form.addEventListener('submit', async (event) => {
	event.preventDefault();

	// Clear the current form data first
	resultsElement.textContent = '';
	errorMsgElement.textContent = '';

	const formData = new FormData(form);
	const requestPayload = [...formData.entries()].reduce((acc, curr) => {
		// eslint-disable-next-line prefer-destructuring
		acc[curr[0]] = curr[1];

		return acc;
	}, {});
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(requestPayload),
	};

	fetch('/api/translate', options)
		.then((response) => response.json())
		.then((data) => {
			if (Object.prototype.hasOwnProperty.call(data, 'translation')) {
				resultsElement.innerHTML = data.translation;
				return;
			}

			errorMsgElement.innerText = JSON.stringify(data);
		})
		.catch((error) => console.error(`Fetch error: ${error}`));
});
