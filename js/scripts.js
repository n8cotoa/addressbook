//business logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.addresses = [];
}

function Address(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}

Address.prototype.fullAddress = function() {
  return this.street + ", " + this.city + " " + this.state;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

function resetContact() {
  $("input#new-first-name").val("");
  $("input#new-last-name").val("");
  $("input.new-street").val("");
  $("input.new-city").val("");
  $("input.new-state").val("");
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

function Todo(item, todoNote){
  this.todoItem = item;
  this.todoNote = todoNote;
  this.todoNumber = [];
}

Todo.prototype.createTodo = function() {
  return this.todoItem;
}

Todo.prototype.removeTodo = function() {
  return this.todoItem

}

// function removeItem() {
//   if ($("ul#todos").checked) {
//
//   }
// }

// user interface logic
$(document).ready(function() {

  $("#add-address").click(function() {
    $("#new-addresses").append('<div class="new-address">' +
                                 '<div class="form-group">' +
                                   '<label for="new-street">Street</label>' +
                                   '<input type="text" class="form-control new-street">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-city">City</label>' +
                                   '<input type="text" class="form-control new-city">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-state">State</label>' +
                                   '<input type="text" class="form-control new-state">' +
                                 '</div>' +
                               '</div>');
  });

  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $(".new-address").each(function() {
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();
      var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState);
      newContact.addresses.push(newAddress);
    });

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
      });
    });
    resetContact();
  });

  $("form#new-place").submit(function(event){
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
      $(".landmark").text(newDestination.landmark);
      $(".time").text(newDestination.time);
      $(".notes").text(newDestination.note);
    });
    $("#location").val("");
    $("#landmark").val("");
    $("#time").val("");
    $("#notes").val("");
  });

  $("form#new-todo").submit(function(event){
    event.preventDefault();

    var inputtedTodo = $("#todo").val();
    var inputtedTodoNotes = $("#todoNotes").val();

    var newTodo = new Todo(inputtedTodo, inputtedTodoNotes);

    $("ul#todos").append("<li id=" + this.todoItem +"><input type='checkbox' name='todo'> <label for='todo'><span class='todo'>" + newTodo.createTodo() + "<span></label></li>")
    console.log(newTodo)

    $(".todo").last().click(function(){
      $("#show-todo").show();
      $("#show-todo h2").text(newTodo.todoItem)
      $(".todoNotes").text(newTodo.todoNote)
      console.log(this.Todo)

    })
    $("#todo").val("")
    $("#todoNotes").val("")

    $("#delete").click(function(){
      if ( $( "input" ).is( ":checked" ) ) {
        $("#" + this.todoItem).remove();


        console.log("checked")
      }
    });
  });
});
