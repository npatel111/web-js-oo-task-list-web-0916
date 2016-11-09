'use strict';
// Lists Controller
function ListsController() {
  let title = $("#list_title").val()
  let list = new List(title)
  $("#list_title").val('')
  $("#select_list").empty()
  $('#lists').append(`<div class="list"><h2><button class="destroy-list" data-id="${list.id}">x</button> ${list.title}</h2><ul id="list-${list.id}" data-id="${list.id}"></ul></div>`)


  store.lists.forEach((list) => {
      $('#select_list').append(`<option value= ${list.id}> ${list.title}  </option>`)
    })
}
