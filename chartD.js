let dishSelect = d3.select("#dish-pairing").on('change', function() {
    var dish = d3.select(this).property('value');
    const url = 'http://127.0.0.1:5000/pairing_collection/rec/';
    let dishUrl = url + dish;
 
    d3.json(dishUrl).then(function(pairing_json) {
        console.log(pairing_json)
        test = {_id: {$oid: '0'}, pairing: [], profile: {}, varietal: '--Select Varietal--'};
        //pairing_json.recommendations.push(test);

        pairing_json.recommendations.splice(0,0,test);

        d3.select("#pairing-dropdown")
            .selectAll("option")
            .remove()
        
        //d3.select("#pairing-dropdown").append("option").text("--Select Varietal--");

        d3.select("#pairing-dropdown")
            .selectAll("option")
            .data(pairing_json.recommendations)
            .enter()
            .append("option")
            .text(function(d) { return d.varietal; })
            .attr("value", function(d) { return d.varietal; });            
    });
});