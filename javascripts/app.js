function addTodo(){
  // Adds a todo to the todo-table, does nothing more yet
  var label = $('.label').val();
  var name = $('.name').val();
  var deadline = $('.deadline').val();
  var priority = $('.priority').val();

  // UNCOMMENT TO CHECK IF ALL INPUT FIELDS HAVE BEEN FILLED IN
  // if(label == '' || name == '' || deadline == '' || priority == ''){
  //   alert("Please complete the To-Do");
  //   return false;
  // }

  $("#todolist").find('.table-input').before("<tr class='todo'><td>"+ label + '<td>' + name
    + '<td>' + deadline + '<td>' + priority + '<td>' + "<input type='checkbox' class='check'>"
    + '<td>' + "<input type='button' class='remove'>")

  //  CLEARS THE INPUTS
  $('.table-input :input').val('');
}

$(document).ready(function(){
  //Adds a new line in the table given the values in the boxes.
  $('#addtodo').on('click', function(event){
    event.stopPropagation();
    event.preventDefault();
    addTodo();
  });

  // WAAROM KAN IK .REMOVE NIET OPVRAGEN
  $('table').on('click', '.remove', function(event){
    event.stopPropagation();
    event.preventDefault();
    $(this).closest('.todo').remove();
  })

// If a field in a table is clicked, and it has a value (not nothing),
// replace it with an input field with the old value in it
  $('table').on('click', 'td', function(){
    var temp = $(this).text();
    if(temp != ''){
      $(this).text('');
      $(this).append("<input type='text' class='input-field'>");
      var inputfield = $(this).find('.input-field');
      inputfield.focus();
      inputfield.val(temp);
    }
  });

// If enter is pressed in an input-field, make it change the value to the inputvalue
  $('table').on('keydown', '.input-field', function(e){
    if(e.which == 13){
      var temp = $(this).val();
      $(this).closest('td').text(temp);
      $(this).remove();
    }
  })


// Need to make function if boolean is checked the row is put last
});
