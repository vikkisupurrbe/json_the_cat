const needle = require('needle');
const breedName = process.argv[2];

if (!breedName) {
  console.log('Please provide a breed name.');
}

// Make a GET request to a URL
needle.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, res) => {
  if (err) {
    console.error('Request failed:', err);
  } else {
    if (res.body && res.body.length > 0) {
      const firstBreed = res.body[0];
      console.log('Description', firstBreed.description);
    } else {
      console.log('No breeds found');
    }
  }
});