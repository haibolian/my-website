import Vue from 'vue'

export let controllers = Vue.observable({})
export let controlleds = Vue.observable({})

export let mutations = {
  setControllers(key,value){
    // Vue.set(controllers,key,value)
    controllers[key] = value
  },
  setControlleds(key,value){
    // Vue.set(controlleds,key,value)
    controlleds[key] = value
  }
}