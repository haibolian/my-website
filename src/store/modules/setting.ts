import { verticalVerse,keepColorName } from '@/setting'

const state = {
  verticalVerse,
  keepColorName,
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