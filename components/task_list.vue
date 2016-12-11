<style>
  .my-task-list {
    color: #ffcc00;
  }
</style>

<template>
<div class="my-task-list">
  <div>{{list.title}}</div>
  <ul>
    <li v-for="task in list.tasks">
      <my-task :task="task"></my-task>
    </li>
  </ul>
  <div @click="addTask">タスクを追加する</div>
</div>
</template>

<script>
var TaskList = require('../model/task_list').default
var Task = require('../model/task').default

export default {
  props: {
    list: {
      type: Object,
      default: () => {
        return new TaskList
      }
    }
  },
  components: {
    MyTask: require('./task.vue')
  },
  methods: {
    addTask: function(){
      this.list.add(new Task)
    }
  },
  events: {
    'task-changed': function(){
      //localStorageに保存
      this.list.save()
    },
    'task-removed': function(task){
      var result = confirm(task.title + "を削除します。")
      if(result){
        var index = this.list.tasks.indexOf(task)
        this.list.tasks.splice(index, 1)
        //this.list.save()
      }
    }
  }
}
</script>
