import { writingMode } from '@/setting'

const state = {
  writingMode,
}
const mutations = {
  changeSetting( state:any, { key, value } : { key:string, value: any }){
    localStorage.setItem(key.toUpperCase(),value)
    state[key] = value
  }
}
export default {
  namespaced: true,
  state,
  mutations,
}