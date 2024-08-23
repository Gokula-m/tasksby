// 1. Create parameterized method/function to multiply 3 numbers
function multiply(a, b, c) {
    var mul = a * b * c;
    console.log(mul);
  }
  
  multiply(4, 2, 5);
  
  // 2. create parameterized method to divide 2 numbers
  function divide(x, y) {
    var d = x / y;
    return d;
  }
  
  var result = divide(20, 10);
  console.log(result);
  
  //  3. create a method to add background color to div element
  function displaycolor() {
    document.getElementById("myDiv").style.backgroundColor = "blueviolet";
  }
  
  // 4. write function to generate random background color of body (hint: Math.random())
  function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);
    document.body.style.background = bgColor;
  }
  
  random_bg_color();
  
  // 5. onload of your webpage, display modal (bootstrap 4 or 5)
  var myModal = new bootstrap.Modal(document.getElementById('exampleModal'))
  window.onload = function () {
    myModal.show();
  }