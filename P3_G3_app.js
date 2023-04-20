const BaseUrl = 'http://127.0.0.1:5000/pairing_collection';

// Fetch url data & log it
d3.json(BaseUrl).then(function(data){
  console.log(data);
});
