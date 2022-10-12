<template>
  <div class="container" id="todo-list">
    <div class="row">
      <div class="col-md-6 mx-auto">
        <h1 class="text-center">TODO List App</h1>
        <form v-on:submit.prevent="addNewTask">
          <label for="tasknameinput">Task Name</label>
          <input v-model="taskname" type="text" class="form-control" id="tasknameinput" placeholder="Add New Title">
          <input v-model="content" type="text" class="form-control" id="contentinput" placeholder="Add New Content">
          <button v-if="this.isEdit == false" type="submit" class="btn btn-success btn-block mt-3">
            Submit
          </button>
          <button v-else v-on:click="updateTask()" type="button" class="btn btn-primary btn-block mt-3">
            Update
          </button>
        </form>
        <table class="table">
          <tr  v-for="(todo) in todos" v-bind:key="todo.id" v-bind:title="todo.title">
            <td class="text-left">{{todo.title}}: {{todo.content}}</td>
            <td class="text-right">
              <button v-on:click="editTask(todo.id, todo.title, todo.content)" class="btn btn-info">Edit</button>
              <button v-on:click="deleteTask(todo.id)" class="btn btn-danger">Delete</button>
            </td>
          </tr>
        </table>
         <div class="overflow-auto">
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>

    <p class="mt-3">Current Page: {{ currentPage }}</p>

    <b-table
      id="my-table"
      :items="todos"
      :per-page="perPage"
      :current-page="currentPage"
      small
    ></b-table>
  </div>

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      todos: [],
      id: '',
      taskname: '',
      content: '',
      isEdit: false,
      perPage: 3,
      currentPage: 1,
    }
  },
  mounted () {
    this.getTasks()
  },
    computed: {
      rows() {
        return this.todos.length
      }
    },
  methods: {
    getTasks () {
      axios({ method: 'GET', url: '/api/tasks' }).then(
        result => {
          console.log(result.data)
          this.todos = result.data
        },
        error => {
          console.error(error)
        }
      )
    },
    addNewTask () {
        if(localStorage.getItem('usertoken')){
      axios.post('/api/task',
        { title: this.taskname,
        content: this.content })
        .then((res) => {
          this.taskname = ''
          this.content = ''
          this.getTasks()
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
        }else{
            alert('로그인 해주세요.')
        }
    },
    editTask (id, title ,content) {
      this.id = id
      this.taskname = title
      this.content = content
      this.isEdit = true
    },
    updateTask () {
        if(localStorage.getItem('usertoken')){
      axios.put(`/api/task/${this.id}`,
        { title: this.taskname,
        content: this.content })
        .then(res => {
          this.taskname = ''
          this.content = ''
          this.isEdit = false
          this.getTasks()
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
        }else{
            alert('로그인 해주세요.')
        }
    },
    deleteTask (id) {
        if(localStorage.getItem('usertoken')){
      axios.delete(`/api/task/${id}`)
        .then(res => {
          this.taskname = ''
          this.content = ''
          this.getTasks()
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
        }else{
            alert('로그인 해주세요.')
        }
    }
  }
}
</script>