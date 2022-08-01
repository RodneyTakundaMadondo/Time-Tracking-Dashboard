fetch("data.json")
.then(function(response){
    return response.json();
})
.then(function(data){
    appendData(data);
})
function appendData(data){
    
    let wcTime = document.querySelector(".wctime") ;
    let wpTime = document.querySelector(".wptime");

    let pcTime = document.querySelector(".pctime");
    let ppTime = document.querySelector(".pptime");

    let scTime = document.querySelector(".sctime");
    let spTime = document.querySelector(".sptime");

    let ecTime = document.querySelector(".ectime");
    let epTime = document.querySelector(".eptime");

    let socTime = document.querySelector(".soctime");
    let sopTime = document.querySelector(".soptime");

    let secTime = document.querySelector(".sectime");
    let sepTime = document.querySelector(".septime");

    let  dailyEL = document.querySelector(".btn-daily");
    dailyEL.addEventListener("click",function(){
        console.log("daily works fine");
  // work stuff for when we click daily
  wcTime.textContent= data[0].timeframes.daily['current'] +"hrs"
  wpTime.textContent=data[0].timeframes.daily['previous'] +"hrs"
  //play stuff for when we click daily
  pcTime.textContent= data[1].timeframes.daily['current'] +"hrs"
  ppTime.textContent= data[1].timeframes.daily['previous'] +"hrs"
  // study  stuff for when we click daily
  scTime.textContent= data[2].timeframes.daily['current'] +"hrs"
  spTime.textContent= data[2].timeframes.daily['previous'] +"hrs"
  // exercise stuff for when we click daily
  ecTime.textContent= data[3].timeframes.daily['current'] +"hrs"
  epTime.textContent= data[3].timeframes.daily['previous'] +"hrs"
  // social stuff for when we click daily
  socTime.textContent= data[4].timeframes.daily['current'] +"hrs"
  sopTime.textContent= data[4].timeframes.daily['previous'] +"hrs"
  // self care stuff for when we click daily
  secTime.textContent= data[5].timeframes.daily['current'] +"hrs"
  sepTime.textContent= data[5].timeframes.daily['previous'] +"hrs"
})

let weeklyEl = document.querySelector(".btn-weekly");
weeklyEl.addEventListener("click",function(){
    console.log("weekly works fine");
    // work stuff for when we click weekly
  wcTime.textContent= data[0].timeframes.weekly['current'] +"hrs"
  wpTime.textContent=data[0].timeframes.weekly['previous'] +"hrs"
  //play stuff for when we click weekly
  pcTime.textContent= data[1].timeframes.weekly['current'] +"hrs"
  ppTime.textContent= data[1].timeframes.weekly['previous'] +"hrs"
  // study  stuff for when we click weekly
  scTime.textContent= data[2].timeframes.weekly['current'] +"hrs"
  spTime.textContent= data[2].timeframes.weekly['previous'] +"hrs"
  // exercise stuff for when we click weekly
  ecTime.textContent= data[3].timeframes.weekly['current'] +"hrs"
  epTime.textContent= data[3].timeframes.weekly['previous'] +"hrs"
  // social stuff for when we click weekly
  socTime.textContent= data[4].timeframes.weekly['current'] +"hrs"
  sopTime.textContent= data[4].timeframes.weekly['previous'] +"hrs"
  // self care stuff for when we click weekly
  secTime.textContent= data[5].timeframes.weekly['current'] +"hrs"
  sepTime.textContent= data[5].timeframes.weekly['previous'] +"hrs"

})
let monthlyEl = document.querySelector(".btn-monthly");
monthlyEl.addEventListener("click",function(){
    // work stuff for when we click monthly
    console.log("monthly works fine");
  wcTime.textContent= data[0].timeframes.monthly['current'] +"hrs"
  wpTime.textContent=data[0].timeframes.monthly['previous'] +"hrs"
  //play stuff for when we click monthly
  pcTime.textContent= data[1].timeframes.monthly['current'] +"hrs"
  ppTime.textContent= data[1].timeframes.monthly['previous'] +"hrs"
  // study  stuff for when we click monthly
  scTime.textContent= data[2].timeframes.monthly['current'] +"hrs"
  spTime.textContent= data[2].timeframes.monthly['previous'] +"hrs"
  // exercise stuff for when we click monthly
  ecTime.textContent= data[3].timeframes.monthly['current'] +"hrs"
  epTime.textContent= data[3].timeframes.monthly['previous'] +"hrs"
  // social stuff for when we click monthly
  socTime.textContent= data[4].timeframes.monthly['current'] +"hrs"
  sopTime.textContent= data[4].timeframes.monthly['previous'] +"hrs"
  // self care stuff for when we click monthly
  secTime.textContent= data[5].timeframes.monthly['current'] +"hrs"
  sepTime.textContent= data[5].timeframes.monthly['previous'] +"hrs"

})



}
