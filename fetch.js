fetch('sample.json').then(response =>
	response.json()
).then(sample => {
	console.log(sample.x);
	console.log(sample.y);
	console.log(sample.z);
})