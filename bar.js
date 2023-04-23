let name = 'Countries'

let title = `Wines Produced x Country`;

let books = ["France", "United_States", "Germany", "Italy", "Austria", "Argentina", "Other"];

let timesRead = [627,321, 42, 31, 16, 10, 40];

let colors = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2"];

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
  title: title,
  plot_bgcolor: "#fffff8",
  paper_bgcolor: "#fffff8"
};

Plotly.newPlot("bar", data, layout);

