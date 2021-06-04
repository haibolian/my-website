const jinrishici = require('jinrishici')

export default function getVerse(){
  return new Promise((resolve,rej)=>{
    jinrishici.load(res=>{
      resolve(res)
    })
  })
}
