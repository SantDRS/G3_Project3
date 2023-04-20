
let varietal = d3.select("#pairing-dropdown").on('change', function() {
    const url = 'http://127.0.0.1:5000/filteredWine/List/';
    var variety = d3.select(this).property("value");
    let variety_url = url + variety;

    console.log(variety_url);

    d3.json(variety_url).then(function(variation) {

    d3.select("#wines-list").selectAll('li').remove();
    d3.select("#wines-list")
            .selectAll("li")
            .data(variation.list_of_wines)
            .enter()
            .append("li")
            .text(function(d) { return d.wine; })
            .attr("value", function(d) { return d.wine; });           
    });
});
