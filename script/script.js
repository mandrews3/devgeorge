$(document).ready(function () {
  $("#saveCalories").on("click", function () {
    let statusText = underConstruction("Not Ready!");
    $("#saveCalories").text(statusText).prop("disabled", true);
  });

  function underConstruction(status) {
    return "Not Ready!";
  }
});
let dataSet = [];


fetch('data.json')
  .then(response => response.json())
  .then(data => {
    dataSet = data; 
    displayData();  
  })
  .catch(error => console.error('Error loading data:', error));


$("#exportData").on("click", function () {
  console.log(JSON.stringify(dataSet, null, 2)); 
});



function displayData() {
  
}
function displayData() {
  $("#data").empty(); // or wherever your data goes

  dataSet.forEach((item, index) => {
    const recordHtml = `
      <div class="record" data-index="${index}">
        <span class="foodName">${item.foodName}</span>
        <span class="calories">${item.calories}</span>
        <button class="edit-btn">Edit</button>
      </div>
    `;
    $("#dataContainer").append(recordHtml);
  });
}

