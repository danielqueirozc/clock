const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")

const clock = setInterval(function time() {
  let dateToDay = new Date()
  let hr = dateToDay.getHours()
  let mn = dateToDay.getMinutes()
  let sc = dateToDay.getSeconds()

  if (hr < 10) hr = '0' + hr
  if (mn < 10) hr = '0' + mn
  if (sc < 10) hr = '0' + sc


  hours.textContent = hr
  minutes.textContent = mn
  seconds.textContent = sc
})