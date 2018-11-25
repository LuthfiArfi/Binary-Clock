function updateDate(){
  var dataDate = new Date();
  var Yr = dataDate.getFullYear();
  var Mt = dataDate.getMonth();
  var Dt = dataDate.getDate();
  switch (Mt) {
    case 0:
      Mt = 'Januari';
      break;
    case 1:
      Mt = 'Februari';
      break;
    case 2:
      Mt = 'Maret';
      break;
    case 3:
      Mt = 'April';
      break;
    case 4:
      Mt = 'Mei';
      break;
    case 5:
      Mt = 'Juni';
      break;
    case 6:
      Mt = 'Juli';
      break;
    case 7:
      Mt = 'Agustus';
      break;
    case 8:
      Mt = 'September';
      break;
    case 9:
      Mt = 'Oktober';
      break;
    case 10:
      Mt = 'November';
      break;
    default:
      Mt = 'Desember';
      break;
    }
  var dateMonthYear = document.getElementById('date');
  dateMonthYear.innerHTML = Dt + ' ' + Mt + ' ' + Yr;
}

setInterval(updateDate, 100);
