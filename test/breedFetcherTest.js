const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('should return a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (error, description) => {
      assert.equal(error, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      assert.equal(expectedDesc, description.trim());

      done();
    });
  });
  it('should return a fail message when an invalid breed is passed in.', (done) => {
    fetchBreedDescription('Monkey', (error, description) => {
      assert.equal(error, null);

      const expectedDesc = "This breed does not exist. Try again.";

      assert.equal(expectedDesc, description.trim());

      done();
    });
  });
});
