const getRandomNumber = ([min, max]) => {
	const minNumb = Number(min);
	const maxNumb = Number(max);
	if(Number.isNaN(minNumb) || Number.isNaN(maxNumb)) {
		return 0;
	}

	const randomNumber = Math.random() * (maxNumb - minNumb + 1);
	const floorRandomNumber = Math.floor(minNumb + randomNumber);

	return floorRandomNumber;
}

module.exports = {
	getRandomNumber
}