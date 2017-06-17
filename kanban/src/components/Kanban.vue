<template>
  <div class='container is-fluid'>
    <a @click='addTask' class='button is-primary'>NEW</a>
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
              <div v-for="task in backlog" class="card">
                <div class="card-content">
                  <div class="content">
                    <p class="title">{{task.title}}</p>
                    <p><strong>Point: </strong>{{task.point}}</p>
                    <p><strong>Assignee: </strong>{{task.assignedTo}}</p>
                  </div>
                </div>
                <footer class="card-footer">
                  <a class="card-footer-item">Edit</a>
                  <a class="card-footer-item">Details</a>
                  <a class="card-footer-item">To-Do</a>
                </footer>
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
              <div v-for="task in todo" class="card">
                <div class="card-content">
                  <div class="content">
                    <p class="title">{{task.title}}</p>
                    <p><strong>Point: </strong>{{task.point}}</p>
                    <p><strong>Assignee: </strong>{{task.assignedTo}}</p>
                  </div>
                </div>
                <footer class="card-footer">
                  <a class="card-footer-item">Edit</a>
                  <a class="card-footer-item">Details</a>
                  <a class="card-footer-item">Doing</a>
                </footer>
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
              <div v-for="task in doing" class="card">
                <div class="card-content">
                  <div class="content">
                    <p class="title">{{task.title}}</p>
                    <p><strong>Point: </strong>{{task.point}}</p>
                    <p><strong>Assignee: </strong>{{task.assignedTo}}</p>
                  </div>
                </div>
                <footer class="card-footer">
                  <a class="card-footer-item">Edit</a>
                  <a class="card-footer-item">Details</a>
                  <a class="card-footer-item">Done</a>
                </footer>
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
              <div v-for="task in done" class="card">
                <div class="card-content">
                  <div class="content">
                    <p class="title">{{task.title}}</p>
                    <p><strong>Point: </strong>{{task.point}}</p>
                    <p><strong>Assignee: </strong>{{task.assignedTo}}</p>
                  </div>
                </div>
                <footer class="card-footer">
                  <a class="card-footer-item">Edit</a>
                  <a class="card-footer-item">Details</a>
                  <!-- <a class="card-footer-item">To-Do</a> -->
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import firebase from 'firebase'
// let config = {
//   apiKey: 'AIzaSyCK186U0kJsSqN633VLGvJg7AYPADrmAUI',
//   authDomain: 'fir-firebase-34fbd.firebaseapp.com',
//   databaseURL: 'https://fir-firebase-34fbd.firebaseio.com',
//   storageBucket: 'fir-firebase-34fbd.appspot.com',
//   messagingSenderId: '736200120565'
// }
// let app = Firebase.initializeApp(config)
// let db = app.database()
// let kanbanRef = db.ref('kanban')
var db = firebase.initializeApp({
  databaseURL: 'https://fir-firebase-34fbd.firebaseio.com'
}).database()
var kanbanRef = db.ref('kanban')
export default {
  name: 'app',
  data () {
    return {
      newTask: {}
    }
  },
  // firebase: {
  //   kanban: kanbanRef
  // },
  created: function () {
    this.$store.dispatch('setKanbanRef', kanbanRef)
  },
  computed: {
    ...mapGetters([
      'kanban',
      'backlog',
      'todo',
      'doing',
      'done'
    ])
    // backlog () {
    //   return this.kanban.filter((task) => task.status === 0)
    // },
    // todo () {
    //   return this.kanban.filter((task) => task.status === 1)
    // },
    // doing () {
    //   return this.kanban.filter((task) => task.status === 2)
    // },
    // done () {
    //   return this.kanban.filter((task) => task.status === 3)
    // }
  },
  methods: {
    // addTask: function () {
    //   console.log(this.kanban)
    //   kanbanRef.push({
    //     // title: 'temp_title',
    //     // description: 'lorem ipsum',
    //     // point: 100,
    //     // assignedTo: 'shabrina',
    //     // status: 0
    //   })
    // }
    addTask: function () {
      this.$store.dispatch('addTask')
    }
  }
}
</script>
