const needle = require('needle');

const fetchBreedDescription = function(breedName, callback) {
  
  if (!breedName) {
    console.log('Please provide a breed name.');
  }

  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  // Make a GET request to a URL
  needle.get(url, (err, res) => {
    if (err) {
      return callback(err, null);
    }
  
    if (res.body && res.body.length > 0) {
      const firstBreed = res.body[0];
      return callback(null, firstBreed.description);
    } else {
      return callback('No breeds found.', null);
    }
  
  });

};


module.exports = { fetchBreedDescription };
