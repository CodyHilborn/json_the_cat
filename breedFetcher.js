const request = require('request');


const args = process.argv.slice(2);
const breedInput = args[0];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedInput}`, (error, response, body) => {

  if (error) {
    console.log(error);
    return;
  }

  console.log('statusCode: ', response && response.statusCode);

  const data = JSON.parse(body);
  const breed = data[0];

  // if (body === '[]') {
  //   
  //   return;
  // };
  if (!breed) {
    return console.log('The breed you entered could not be found. Try again.');
  }

  console.log(breed.description);

});

