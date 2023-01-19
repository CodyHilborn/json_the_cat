const { fetchBreedDescription } = require('./breedFetcher');

const args = process.argv.slice(2);
const breedInput = args[0];


fetchBreedDescription(breedInput, (error, description) => {
  if (error) {
    console.log('Error fetching details: ', error);
  } else {
    console.log(description);
  }
});
