console.log('Init!');


// inputmask
const form = document.querySelector('.form');
// const telSelector = form.querySelector('input[type="tel"]');
// const inputMask = new Inputmask('+7 (999) 999-99-99');
// inputMask.mask(telSelector);

const validation = new JustValidate('.form');

validation
	.addField('.input-name', [
		{
			rule: 'minLength',
			value: 2,
		},
		{
			rule: 'maxLength',
			value: 30,
		},
		{
			rule: 'required',
			value: true,
			errorMessage: 'Введите имя'
		}
	])
	.addField('.input-mail', [
		{
			rule: 'required',
			value: true,
			errorMessage: 'Email обязателен',
		},
		{
			rule: 'email',
			value: true,
			errorMessage: 'Введите корректный Email',
		},
	]).onSuccess((event) => {
		console.log('Validation passes and form submitted', event);

		let formData = new FormData(event.target);

		console.log(...formData);

		let xhr = new XMLHttpRequest();

		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					// console.log('Отправлено');
					window.alert("Сообщение отправленно");
				}
			}
		}

		xhr.open('POST', 'mail.php', true);
		xhr.send(formData);

		event.target.reset();
	});
