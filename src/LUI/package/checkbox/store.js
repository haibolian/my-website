import { ref } from 'vue'

export let controllers = ref({})
export let controlleds = ref({})

export let mutations = {
  setControllers(key,value){
    controllers[key] = value
  },
  setControlleds(key,value){
    controlleds[key] = value
  }
}