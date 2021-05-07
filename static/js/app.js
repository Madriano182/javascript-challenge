// from data.js
let tableData = data;
// create tbody variable to append all the info
let tbody = d3.select('tbody');
// append all the info from data.js
tableData.forEach(item => {
    let newRow = tbody.append('tr');
    newRow.append('td').text(item.datetime);
    newRow.append('td').text(item.city);
    newRow.append('td').text(item.state);
    newRow.append('td').text(item.country);
    newRow.append('td').text(item.shape);
    newRow.append('td').text(item.comments);
});

let button = d3.select('#filter-btn');

// Create Function to filter data
button.on('click', function() {
    // Create Variables
    let dateInput = d3.select('#datetime');
    let dateValue = dateInput.property('value');


    let filteredData = tableData.filter(item => item.datetime === dateValue);
       //console.log(filteredData);
    // clear table info before appending new data
    tbody.html(``);
    // get filtered data
    filteredData.forEach( item => {
        let newRow1 = tbody.append('tr');
        newRow1.append('td').text(item.datetime);
        newRow1.append('td').text(item.city);
        newRow1.append('td').text(item.state);
        newRow1.append('td').text(item.country);
        newRow1.append('td').text(item.shape);
        newRow1.append('td').text(item.comments);
    });
});

// Create Function to filter data
button.on('click', function() {
    // Create Variables
    let cityInput = d3.select('#city');
    let cityValue = cityInput.property('value');


    let filteredData2 = tableData.filter(item => item.city === cityValue);
    // clear table info before appending new data
    tbody.html(``);
    // get filtered data
    filteredData2.forEach( item => {
        let newRow2 = tbody.append('tr');
        newRow2.append('td').text(item.datetime);
        newRow2.append('td').text(item.city);
        newRow2.append('td').text(item.state);
        newRow2.append('td').text(item.country);
        newRow2.append('td').text(item.shape);
        newRow2.append('td').text(item.comments);
    });
});

// // Create Function to filter datan
// button.on('click', function() {
//     // Create Variables
//     let stateInput = d3.select('#state');
//     let stateValue = stateInput.property('value');


//     let filteredData3 = tableData.filter(item => item.state === stateValue);
//     // clear table info before appending new data
//     tbody.html(``);
//     // get filtered data
//     filteredData3.forEach( item => {
//         let newRow2 = tbody.append('tr');
//         newRow3.append('td').text(item.datetime);
//         newRow3.append('td').text(item.city);
//         newRow3.append('td').text(item.state);
//         newRow3.append('td').text(item.country);
//         newRow3.append('td').text(item.shape);
//         newRow3.append('td').text(item.comments);
//     });
// });

// // Create Function to filter datan
// button.on('click', function() {
//     // Create Variables
//     let countryInput = d3.select('#country');
//     let countryValue = countryInput.property('value');


//     let filteredData4 = tableData.filter(item => item.country === countryValue);
//     // clear table info before appending new data
//     tbody.html(``);
//     // get filtered data
//     filteredData4.forEach( item => {
//         let newRow4 = tbody.append('tr');
//         newRow4.append('td').text(item.datetime);
//         newRow4.append('td').text(item.city);
//         newRow4.append('td').text(item.state);
//         newRow4.append('td').text(item.country);
//         newRow4.append('td').text(item.shape);
//         newRow4.append('td').text(item.comments);
//     });
// });

// // Create Function to filter data
// button.on('click', function() {
//     // Create Variables
//     let shapeInput = d3.select('#shape');
//     let shapeValue = shapeInput.property('value');


//     let filteredData5 = tableData.filter(item => item.shape === shapeValue);
//     // clear table info before appending new data
//     tbody.html(``);
//     // get filtered data
//     filteredData5.forEach( item => {
//         let newRow5 = tbody.append('tr');
//         newRow5.append('td').text(item.datetime);
//         newRow5.append('td').text(item.city);
//         newRow5.append('td').text(item.state);
//         newRow5.append('td').text(item.country);
//         newRow5.append('td').text(item.shape);
//         newRow5.append('td').text(item.comments);
//     });
// });