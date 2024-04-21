const clock = document.querySelector(".clock");
setInterval(()=>{
  let date = new Date();
  // let hours = date.getHours();
  // let minutes = date.getMinutes();
  // let seconds = date.getSeconds();
  // let day = date.getDate();
  // let month = date.getMonth();
  // let year = date.getFullYear();
  // clock.innerHTML=`${year}:${month}:${day}:${hours}:${minutes}:${seconds}`;
  clock.innerHTML=date;
},1000)