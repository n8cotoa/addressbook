//business logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

function Destination(location, landmark, time, note) {
  this.location = location;
  this.landmark = landmark;
  this.time = time;
  this.note = note;
}

Destination.prototype.Destination = function() {
  return this.location;
}

// user interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
    });

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
  });

  $("#submit").click(function(event){
    event.preventDefault();

    var inputtedLocation = $("#location").val();
    var inputtedLandmarks = $("#landmark").val();
    var inputtedTime = $("#time").val();
    var inputtedNotes = $("#notes").val();

    var newDestination = new Destination(inputtedLocation, inputtedLocation, inputtedTime, inputtedNotes);

    $("ul#destinations").append("<li><span class='destination'>" + newDestination.Destination() + "</span></li>")

    $(".destination").last().click(function() {
      $("#show-destination").show();
      $("#show-destination h2").text(newDestination.location);
      $(".location").text(newDestination.landmark);
      $(".time").text(newDestination.time);
      $(".notes").text(newDestination.note);
    });
    $("#location").val("");
    $("#landmark").val("");
    $("#time").val("");
    $("#notes").val("");
  });
});
