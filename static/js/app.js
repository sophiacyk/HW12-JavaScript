// from data.js
var tableData = data;

// YOUR CODE HERE!

var filterbtn = d3.select("#filter-btn");
var tbody = d3.select("tbody");



function handleInput() {
  
  var newText = "";
  newText = d3.select("#datetime").property("value");
  //console.log(newText);

  if(tbody.select("td")){
    tbody.selectAll("td").remove();
    tbody.selectAll("tr").remove();
  }

  report = tableData.filter(x=>x.datetime===newText)
  //console.log(newText);
  
  if(report.length === 0){
    alert("No data for this date.");
  };

  report.forEach((SpotDate) => {
    var row = tbody.append("tr");
    Object.entries(SpotDate).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    })});  
  
    return false;

};




filterbtn.on("click", handleInput);
  


