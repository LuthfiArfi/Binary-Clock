// split number per digit
function splitNumber(num){
  var numString = String(num);
  var result = [];
  if (numString.length === 1) {
    numString = '0' + numString;
  }
  for (var i = 0; i < numString.length; i++) {
    result.push(numString[i]);
  }
  return result;
}

//ambil waktu
function getTime(){
  var dataDate = new Date();
  var Hr = dataDate.getHours();
  var Mn = dataDate.getMinutes();
  var Sc = dataDate.getSeconds();
  var time = {
    h0 : splitNumber(Hr)[0],
    h1 : splitNumber(Hr)[1],
    m0 : splitNumber(Mn)[0],
    m1 : splitNumber(Mn)[1],
    s0 : splitNumber(Sc)[0],
    s1 : splitNumber(Sc)[1],
  };
  return time;
}

//animasi
function binaryKeys(){
  var time = getTime();
  var timeKeys = Object.keys(time);
  for (var h in time){
    for (var i = 1; i < 5 ; i++) {
      var circle = document.getElementById(h + '_' + i);
      if (i === 1) {
        // 2 pangkat 0
        if (time[h] == 1 || time[h] == 3  || time[h] == 5 || time[h] == 7 || time[h] == 9) {
          circle.classList.add("on");
        }
        else {
          circle.classList.remove("on");
        }
      }
      else if (i === 2) {
        // 2 pangkat 1
        if (time[h] == 2 || time[h] == 3 || time[h] == 6  || time[h] == 7) {
          circle.classList.add("on");
        }
        else {
          circle.classList.remove("on");
        }
      }
      else if (i === 3) {
        // 2 pangkat 1
        if (time[h] == 4  || time[h] == 5 || time[h] == 6 || time[h] == 7) {
          circle.classList.add("on");
        }
        else {
          circle.classList.remove("on");
        }
      }
      else if (i === 4) {
        // 2 pangkat 1
        if (time[h] == 8  || time[h] == 9) {
          circle.classList.add("on");
        }
        else {
          circle.classList.remove("on");
        }
      }
    }
  }
  // display hour
  var hourClock1 = document.getElementById('hour-clock1');
  hourClock1.innerHTML = time.h0;
  var hourClock2 = document.getElementById('hour-clock2');
  hourClock2.innerHTML = time.h1;
  // display minute
  var minuteClock1 = document.getElementById('minute-clock1');
  minuteClock1.innerHTML = time.m0;
  var minuteClock2 = document.getElementById('minute-clock2');
  minuteClock2.innerHTML = time.m1;
  //display second
  var secondClock1 = document.getElementById('second-clock1');
  secondClock1.innerHTML = time.s0;
  var secondClock2 = document.getElementById('second-clock2');
  secondClock2.innerHTML = time.s1;
}


//update waktu 100ms
setInterval(binaryKeys,100);
