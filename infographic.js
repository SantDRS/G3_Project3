function buildPanel(data){
    console.log(data['Top Wines'][0]);
    let table = d3.select('table');
    table.attr("class", "table table-striped");
    console.log(data);
    // Use D3 to select the table body
    let tbody = d3.select("tbody");
    tbody.selectAll("tr").remove();
    //loop over data
    for(i = 0; i < data['Top Wines'].length; i++){
        let row = tbody.append("tr");
        row.append("td").text(data['Top Wines'][i]['wine']);
    };
}

function makeInfographic(){
    let list = document.getElementById("pairing-dropdown");
    let variety =list.options[list.selectedIndex].text;
    const url = 'http://127.0.0.1:5000/filteredWine/top/';
    let variety_url = url + variety;
    console.log(variety_url);
    d3.json(variety_url).then(function(data){
        // console.log(data)
        buildPanel(data)
    });

}