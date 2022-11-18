/**
 * Viết chương trình có một ô input, một button. Khi click vào button thì in ra các số nguyên tố từ 1 tới giá trị của ô input
 */
function songuyento() {
  var nhapso = +document.getElementById("nhapso").value;
  var show = "";
  for (var i = 2; i < nhapso; i++) {
    var result = true;
    for (var j = 2; j < Math.sqrt(i); j++) {
      if (i % j === 0) {
        result = false;
        break;
      }
    }
    if (result) {
      show += i + " ";
    }
  }
  document.getElementById("ketqua").innerHTML = show;
}
