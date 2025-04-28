$(document).ready(function () {
  $("#saveCalories").on("click", function () {
    let statusText = underConstruction("Not Ready!");
    $("#saveCalories").text(statusText).prop("disabled", true);
  });

  function underConstruction(status) {
    return "Not Ready!";
  }
});