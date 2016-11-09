'use strict';
// Task Model


const Task = (function createTask() {
  var id = 1;
  return class {
      constructor(description, priority, list_id) {
        this.id = id++
        this.description = description
        this.priority = priority
        this.list_id = list_id
        store.tasks = [...store.tasks, this]
    }
  }
}())
