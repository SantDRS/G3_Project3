let name = 'Countries'

let title = `Counties produced wines`

let books = ["United_States", "Italy", "Argentina", "France", "Germany", "Austria", "Other"]

let timesRead = [321, 31, 10, 627, 42, 16, 40]

let trace1 = {
  x: books,
  y: timesRead,
  type: 'bar'
};

let data = [trace1];

let layout = {
  title: title
};

Plotly.newPlot("bar", data, layout)
