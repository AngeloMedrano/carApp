const make = document.getElementById('make');
const year = document.getElementById('year');
const modelNamesList = document.getElementById('modelNames');
const info = document.getElementById('info');
const searchBtn = document.querySelector('.searchBtn');
const apiBase = `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/`;
const apiMake = `make/`;
const apiYear = `/modelyear/`;
const apiFormat = `?format=json`;

searchBtn.addEventListener('click', ()=>{
	if (make.value.length && year.value.length) {
		apiRequest(make.value, year.value);
		modelNamesList.innerHTML = '';
	}
})

function apiRequest(make, year) {
	const api = apiBase + apiMake + make + apiYear + year + apiFormat;
	const li = document.createElement('li');

	fetch(api)
		.then(response =>{
			return response.json();
		})
		.then(data =>{
			const cars = data.Results;
			console.log(cars);
			cars.forEach(car => {
				const li = document.createElement('li');
				li.appendChild(document.createTextNode(car.Model_Name));
				modelNamesList.appendChild(li);
			})
			// const {Country, Mfr_CommonName} = data.Results[9];
			// countrys.textContent = Country;
			// name.textContent = Mfr_CommonName;
		})
}



