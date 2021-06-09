const getRemainingTime = deadline => {
  let now = new Date (), 
      remainTime = (new Date (deadline) - now + 1000) / 1000,
      remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
      remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
      remainHour = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
      remainDays =  Math.floor(remainTime / (3600 * 24));

  return {
    remainTime,
    remainSeconds,
    remainMinutes,
    remainHour,
    remainDays
  }
}

const countdown = (deadline, elem, finalMessage) => {
  const el = document.getElementById(elem); 
  const timerUpdate = setInterval( () => {
  let t = getRemainingTime(deadline);
  el.innerHTML = `${t.remainDays}D:${t.remainHour}H:${t.remainMinutes}M:${t.remainSeconds}s`;
  if (t.remainTime <= 1) {
    clearInterval(timerUpdate)
    el.innerHTML = finalMessage;
  }
  }, 1000)  
}

countdown('Mon June 17 2021 00:00:00 GMT-0600', 'clock', 'Discount')

// https://stackoverflow.com/questions/67578464/innerhtml-not-showing-when-working-on-console