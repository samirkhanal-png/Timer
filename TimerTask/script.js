const start=document.querySelector("#start")
const stop=document.querySelector("#stop")
const reset=document.querySelector("#reset")

const timer=document.createElement("h2")
let hour=0
let minute=0
let second=0
let id

function updateTimer(){
  let nHour=hour.toString().padStart(2,"0")
  let nMinute=minute.toString().padStart(2,"0")
  let nSecond=second.toString().padStart(2,"0")
  timer.innerText=`${nHour}:${nMinute}:${nSecond}`
  document.body.appendChild(timer)
}

start.addEventListener("click",()=>{
  id=setInterval(()=>{
    second++
    if(second<60){
      updateTimer()
   }
   else{
    if(minute==60){
      second=0
      minute=0
      hour++
      updateTimer()
    }
      else{ //minute<60
        second=0
        minute++
        updateTimer()
      }
  }
  },1000)
  updateTimer()
})

function stop(){
  clearInterval(id)
}

stop.addEventListener("click",stop)