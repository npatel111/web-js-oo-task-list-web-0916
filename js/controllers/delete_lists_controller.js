function deleteListsController(id){

  store.lists = store.lists.filter(function(list){
   return list.id !== id;
 })
  $("#lists").empty()
  $("#select_list").empty()

  store.lists.forEach((list) => {
      $('#lists').append(`<div class="list"><h2><button class="destroy-list" data-id="${list.id}">x</button> ${list.title}</h2><ul id="list-${list.id}" data-id="${list.id}"></ul></div>`)
      $('#select_list').append(`<option value= ${list.id}> ${list.title}  </option>`)
      store.tasks.forEach((task) => {
        if (parseInt(task.list_id) === list.id) {
          $(`#list-${task.list_id}`).append(`<li data-id="${task.id}"><button class="destroy-task" list-id = "${id}" data-id = "${task.id}">x</button> ${task.description}, ${task.priority}</li>`)
        }
        })

    })

}
