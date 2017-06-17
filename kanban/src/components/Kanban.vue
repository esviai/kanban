<template>
  <div class='container is-fluid'>
    <div class="columns">
      <div class="column is-2">
        <br>
        <a @click="showNew = true" class="nav-item button is-warning">New Task</a>
        <br>
      </div>
    </div>
    <!-- <a @click='addTask' class='button is-primary'>NEW</a> -->
    <div v-if="showNew" @click="closeNew" class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-card" @click.stop>
        <header class="modal-card-head">
          <p class="modal-card-title">New Task</p>
          <button @click="closeNew" class="delete"></button>
        </header>
        <section class="modal-card-body">
          <div class="field">
            <label class="label">Title: </label>
            <p class="control is-expanded"><input v-model="newTask.title" class="input" type="text" placeholder="Title"></p>
          </div>
          <br>
          <div class="field">
            <label class="label">Description: </label>
            <p class="control is-expanded"><input v-model="newTask.description" class="input" type="text" placeholder="Description"></p>
          </div>
          <br>
          <div class="field">
            <label class="label">Assignee: </label>
            <p class="control is-expanded"><input v-model="newTask.assignedTo" class="input" type="text" placeholder="Assignee"></p>
          </div>
          <br>
          <div class="field">
            <label class="label">Point: </label>
            <p class="control is-expanded"><input v-model="newTask.point" class="input" type="text" placeholder="Point"></p>
          </div>
        </section>
        <footer class="modal-card-foot">
          <a @click="addTask(newTask)" class="button is-primary is-outlined">Create</a>
        </footer>
      </div>
    </div>
    <div class="columns">
      <div class="column is-one-quarter">
        <div class="card">
          <header class="card-header" style="background-color: #FF3860;">
            <p class="card-header-title" style="color: white">
              Backlog
            </p>
            <a class="card-header-icon">
            </a>
          </header>
          <div class="card-content">
            <div class="content">
              <div class="columns is-multiline">
                <div class="column is-12" v-for="task in backlog">
                  <div class="card">
                    <div class="card-content">
                      <div class="content">
                        <p class="title">{{task.title}}</p>
                        <p><strong>Point: </strong>{{task.point}}</p>
                        <p><strong>Assignee: </strong>{{task.assignedTo}}</p>
                      </div>
                    </div>
                    <footer class="card-footer">
                      <a @click="openEdit(task)" class="card-footer-item">Edit</a>
                      <a @click= "openDetails(task)" class="card-footer-item">Details</a>
                      <a @click="changeStatus(task)" class="card-footer-item">To-Do</a>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-one-quarter">
        <div class="card">
          <header class="card-header" style="background-color: orange;">
            <p class="card-header-title" style="color: white">
              To-Do
            </p>
            <a class="card-header-icon">
            </a>
          </header>
          <div class="card-content">
            <div class="content">
              <div class="columns is-multiline">
                <div class="column is-12" v-for="task in todo">
                  <div class="card">
                    <div class="card-content">
                      <div class="content">
                        <p class="title">{{task.title}}</p>
                        <p><strong>Point: </strong>{{task.point}}</p>
                        <p><strong>Assignee: </strong>{{task.assignedTo}}</p>
                      </div>
                    </div>
                    <footer class="card-footer">
                      <a @click="openEdit(task)" class="card-footer-item">Edit</a>
                      <a @click= "openDetails(task)" class="card-footer-item">Details</a>
                      <a @click="changeStatus(task)" class="card-footer-item">Doing</a>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-one-quarter">
        <div class="card">
          <header class="card-header" style="background-color: #FFDD57;">
            <p class="card-header-title" style="color: white">
              Doing
            </p>
            <a class="card-header-icon">
            </a>
          </header>
          <div class="card-content">
            <div class="content">
              <div class="columns is-multiline">
                <div class="column is-12" v-for="task in doing">
                  <div class="card">
                    <div class="card-content">
                      <div class="content">
                        <p class="title">{{task.title}}</p>
                        <p><strong>Point: </strong>{{task.point}}</p>
                        <p><strong>Assignee: </strong>{{task.assignedTo}}</p>
                      </div>
                    </div>
                    <footer class="card-footer">
                      <a @click="openEdit(task)" class="card-footer-item">Edit</a>
                      <a @click= "openDetails(task)" class="card-footer-item">Details</a>
                      <a @click="changeStatus(task)" class="card-footer-item">Done</a>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-one-quarter">
        <div class="card">
          <header class="card-header" style="background-color: #23D160;">
            <p class="card-header-title" style="color: white">
              Done
            </p>
            <a class="card-header-icon">
            </a>
          </header>
          <div class="card-content">
            <div class="content">
              <div class="columns is-multiline">
                <div class="column is-12" v-for="task in done">
                  <div class="card">
                    <div class="card-content">
                      <div class="content">
                        <p class="title">{{task.title}}</p>
                        <p><strong>Point: </strong>{{task.point}}</p>
                        <p><strong>Assignee: </strong>{{task.assignedTo}}</p>
                      </div>
                    </div>
                    <footer class="card-footer">
                      <a @click="openEdit(task)" class="card-footer-item">Edit</a>
                      <a @click= "openDetails(task)" class="card-footer-item">Details</a>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showDetails" @click="closeDetails" class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-card" @click.stop>
        <header class="modal-card-head">
          <p class="modal-card-title">{{taskDetails.title}}</p>
          <button @click="closeDetails" class="delete"></button>
        </header>
        <section class="modal-card-body">
          <p><strong>Description: </strong>{{taskDetails.description}}</p>
          <p><strong>Point: </strong>{{taskDetails.point}}</p>
          <p><strong>Assignee: </strong>{{taskDetails.assignedTo}}</p>
        </section>
        <footer class="modal-card-foot">
          <a @click="destroy(taskDetails)" class="button is-primary is-outlined">Delete</a>
        </footer>
      </div>
    </div>
    <div v-if="showEdit" @click="closeEdit" class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-card" @click.stop>
        <header class="modal-card-head">
          <p class="modal-card-title">{{editTask.title}}</p>
          <button @click="closeEdit" class="delete"></button>
        </header>
        <section class="modal-card-body">
          <div class="field">
            <label class="label">Assignee: </label>
            <p class="control is-expanded"><input v-model="editTask.assignedTo" class="input" type="text" placeholder="Assignee"></p>
          </div>
          <br>
          <div class="field">
            <label class="label">Point: </label>
            <p class="control is-expanded"><input v-model="editTask.point" class="input" type="text" placeholder="Point"></p>
          </div>
        </section>
        <footer class="modal-card-foot">
          <a @click="updateTask(editTask)" class="button is-primary is-outlined">Edit</a>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import Firebase from 'firebase'
let config = {
  apiKey: 'AIzaSyCK186U0kJsSqN633VLGvJg7AYPADrmAUI',
  authDomain: 'fir-firebase-34fbd.firebaseapp.com',
  databaseURL: 'https://fir-firebase-34fbd.firebaseio.com',
  storageBucket: 'fir-firebase-34fbd.appspot.com',
  messagingSenderId: '736200120565'
}
let app = Firebase.initializeApp(config)
let db = app.database()
let kanbanRef = db.ref('kanban')

export default {
  name: 'app',
  data () {
    return {
      showNew: false,
      showDetails: false,
      showEdit: false,
      newTask: {},
      taskDetails: {},
      editTask: {}
    }
  },
  firebase: {
    kanban: kanbanRef
  },
  computed: {
    backlog () {
      return this.kanban.filter((task) => task.status === 0)
    },
    todo () {
      return this.kanban.filter((task) => task.status === 1)
    },
    doing () {
      return this.kanban.filter((task) => task.status === 2)
    },
    done () {
      return this.kanban.filter((task) => task.status === 3)
    }
  },
  methods: {
    addTask: function (newTask) {
      newTask.status = 0
      kanbanRef.push(newTask)
      this.showNew = false
      this.newTask = {}
    },
    closeNew: function (task) {
      this.showNew = false
      this.newTask = {}
    },
    changeStatus: function (task) {
      if (task.status >= 0 && task.status < 3) {
        task.status += 1
      }
      kanbanRef.child(task['.key']).child('status').set(task.status)
    },
    openDetails: function (task) {
      this.showDetails = true
      this.taskDetails = {...task}
    },
    closeDetails: function (task) {
      this.showDetails = false
      this.taskDetails = {}
    },
    openEdit: function (task) {
      this.showEdit = true
      this.editTask = {...task}
      console.log(this.editTask)
    },
    closeEdit: function (task) {
      this.showEdit = false
      this.editTask = {}
    },
    updateTask: function (editTask) {
      for (var prop in editTask) {
        if (prop !== '.key') {
          kanbanRef.child(editTask['.key']).child(prop).set(editTask[prop])
        }
      }
      this.showEdit = false
      this.editTask = {}
    },
    destroy: function (task) {
      kanbanRef.child(task['.key']).remove()
      this.showDetails = false
    }
  }
}
</script>
