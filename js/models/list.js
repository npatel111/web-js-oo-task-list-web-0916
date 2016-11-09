'use strict';
// List Model

const List = (function createList() {
  var id = 1;
    return class {
      constructor(title) {
        this.id = id++
        this.title = title
        this.tasks = []
        store.lists = [...store.lists, this]
      }

  }

}())
