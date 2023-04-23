let name = 'Countries'


let books = ["France", "United States", "Germany", "Italy", "Austria", "Argentina", "Other"];

let timesRead = [627,321, 42, 31, 16, 10, 40];

let colors = ["#722F37", "#722F37", "#722F37", "#722F37", "#722F37", "#722F37", "#722F37"];

let trace1 = {
  x: books,
  y: timesRead,
  type: 'bar',
  marker: {
    color: colors
  }
};

let data = [trace1];

let layout = {
  plot_bgcolor: "#fffff8",
  paper_bgcolor: "#fffff8"
};

Plotly.newPlot("bar", data, layout);

