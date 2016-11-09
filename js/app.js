// Initialize

$(function() { // on document ready
  // listController = new ListsController();
  // listController.init();
  // tasksController = new TasksController();
  // tasksController.init();


  $("#add_list").on("submit", function() {
    event.preventDefault()
    ListsController()
  })

  $("#add_task").on("submit", function() {
    event.preventDefault()
    TasksController()
  })

  $('#wrapper').on('click', '.destroy-list', function(){
    event.preventDefault()
    let id = $(this).data('id')
   deleteListsController(id)
 })

 $('#wrapper').on('click', '.destroy-task', function(){
   event.preventDefault()
   let id = $(this).data('id')
   let list_id = $(this).attr('list-id')
  deleteTasksController(id, list_id)
})

})
