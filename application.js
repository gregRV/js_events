$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());

  function bindEvents() {
    // Bind functions which add, remove, and complete todos to the appropriate
    // elements
    $('button').on('click', function(){
      var val = $('input').val();
      $('.todo_list').append(buildTodo(val));
    });

    $('.todo_list').on('click', '.delete', function(){
      $(this).closest('.todo').remove();
    });

    $('.todo_list').on('click', '.complete', function(){
      $(this).closest('.todo').addClass("todo complete");
    });
  }


  //Create functions to add, remove and complete todos

  function buildTodo(todoName) {
    // Creates an jQueryDOMElement from the todoTemplate.
    var $todo = $(todoTemplate);
    // Modifies it's text to use the passed in todoName.
    $todo.find('h2').text(todoName);
    // Returns the jQueryDOMElement to be used elsewhere.
    return $todo;
  }

  bindEvents();
});
