let dishSelect = d3.select("#dish-pairing").on('change', function() {
    var dish = eval(d3.select(this).property('value'));
    const url = 'http://127.0.0.1:5000/pairing_collection';
    let dishUrl = url + dish;

    let pairing_json = json(dishUrl)

    let pairing_list = [];
    for (let i = 0; i < pairing_json.length(); i++) {
        pairing_list.push(pairing_json.pairing[i]['varietal']);
    };
});