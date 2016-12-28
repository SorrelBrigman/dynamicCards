//Global Variables

var userText = "";


//take value of input box
var inputText = function () {
  userText = $("#creationCard").val();
  return userText;
}


//put in new bootstrap card
var newCardCreation = function () {
    //gathers userInput
    inputText();
      //new card has
    //html for new card
        //text from inputbox
      var newCard = `<div class="col-sm-4">
    <div class="card card-block">
      <p class="card-text">${userText}</p>
      <a href="#" class="btn btn-primary delete">Delete</a>
    </div>
    </div>`


    //added to new card
    $("#cardHolder").append(newCard);
    //resets input textarea to blank
    $("#creationCard").val("");
    //on click of delete button, card is deleted "binding" event listener to new card
    $(".delete").click(deleteButton);
}

//delete button function

var deleteButton = function() {
  console.log("deleteButton");
  $(this).parentsUntil("#cardHolder").remove();
}

// event listeners

//on click of create button, newCardCreation function is run

$(".create").click(newCardCreation);

//on click of delete button, card is deleted
$(".delete").click(deleteButton);
