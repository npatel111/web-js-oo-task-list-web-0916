'use strict';
// Tasks Controller

function TasksController() {
  let description = $("#task_description").val()
  let priority = $("#task_priority").val()
  let list_id = $("#select_list").val()

  let task = new Task(description, priority, list_id)
  $("#task_priority").val('')
  $("#task_description").val('')
  // $('#lists').append(`<div class="list"><h2><button class="destroy-list">x</button> ${list.title}</h2><ul id="list-${list.id}" data-id="${list.id}"></ul></div>`)
  $(`#list-${list_id}`).append(`<li data-id="${task.id}"><button class="destroy-task" list-id = "${list_id}" data-id = "${task.id}">x</button> ${task.description}, ${task.priority}</li>`)

  // $("#task_title").val('')
}
