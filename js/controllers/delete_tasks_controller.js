function deleteTasksController(id, list_id){
  store.tasks = store.tasks.filter(function(task){
   return task.id !== id;
 })
  $(`#list-${list_id}`).empty()
  store.tasks.forEach((task) => {
    if (task.list_id === list_id) {
      $(`#list-${list_id}`).append(`<li data-id="${task.id}"><button class="destroy-task" list-id = "${list_id}" data-id = "${task.id}">x</button> ${task.description}, ${task.priority}</li>`)
   }
 })
}
