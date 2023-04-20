const url = "http://127.0.0.1:5000/pairing_collection";
fetch(url)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Could not retrieve data from the specified URL.');
    }
  })
  .then(data => {
    const pairingItems = new Set();
    data.forEach(item => {
      item.pairing.forEach(pairing => {
        pairingItems.add(pairing);
      });
    });
    const uniquePairings = Array.from(pairingItems);
    
    // Populate the dropdown list with the unique pairings
    const select = document.getElementById("dish-pairing");
    uniquePairings.forEach(pairing => {
      const option = document.createElement("option");
      option.text = pairing;
      option.value = pairing;
      select.appendChild(option);
    });
  })
  .catch(error => console.error(error));
