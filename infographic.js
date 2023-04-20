function buildPanel(data){
    console.log(data)
    // div.innerHTML 
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