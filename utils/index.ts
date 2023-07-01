const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=Ford";
const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "c9e5c16f7dmsh19db067b2f7a1c3p1042c5jsn2eb220666674",
		"X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
	},
};
export const getAllCars = async () => {
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		return result;
	} catch (error) {
		console.error(error);
	}
};
export const calculateCarRent = (city_mpg: number, year: number) => {
	const basePricePerDay = 50; // Base rental price per day in dollars
	const mileageFactor = 0.1; // Additional rate per mile driven
	const ageFactor = 0.05; // Additional rate per year of vehicle age

	// Calculate additional rate based on mileage and age
	const mileageRate = city_mpg * mileageFactor;
	const ageRate = (new Date().getFullYear() - year) * ageFactor;

	// Calculate total rental rate per day
	const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

	return rentalRatePerDay.toFixed(0);
};
