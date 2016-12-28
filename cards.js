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
      var newCard = `<div class="col-sm-6">
    <div class="card card-block">
      <p class="card-text">${userText}</p>
      <a href="#" class="btn btn-primary">Delete</a>
    </div>
    </div>`


    //added to new card
    $("#cardHolder").append(newCard);
    //resets input textarea to blank
    $("#creationCard").val("");
}

//delete button function

var deleteButton = function() {

}

// event listeners

//on click of create button, newCardCreation function is run

$(".create").click(newCardCreation);
