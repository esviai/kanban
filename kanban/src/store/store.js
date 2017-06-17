import * as firebase from 'firebase'
import Vue from 'vue'
import Vuex from 'vuex'
import {firebaseMutations, firebaseAction} from 'vuexfire'

Vue.use(Vuex)

var db = firebase.initializeApp({
  databaseURL: 'https://fir-firebase-34fbd.firebaseio.com'
}).database()
var kanbanRef = db.ref('kanban')

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

export const store = new Vuex.Store({
  strict: true,
  state: {
    kanban: []
  },
  getters: {
    kanban (state) {
      return state.kanban
    },
    backlog (state) {
      return state.kanban.filter((task) => task.status === 0)
    },

    todo (state) {
      return state.kanban.filter((task) => task.status === 1)
    },

    doing (state) {
      return state.kanban.filter((task) => task.status === 2)
    },
    done (state) {
      return state.kanban.filter((task) => task.status === 3)
    }
  },
  mutations: {
    ...firebaseMutations
  },
  actions: {
    setKanbanRef: firebaseAction(({
      bindFirebaseRef
    }, kanbanRef) => {
      bindFirebaseRef('kanban', kanbanRef)
    }),
    addTask: function (task) {
      kanbanRef.push(task)
    },
    updateTask: function (key, newTask) {
      kanbanRef.child(key).child('description').set(newTask)
    },
    removeTask: function (key) {
      kanbanRef.child(key).remove()
    }
  }
})
