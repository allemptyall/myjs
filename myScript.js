function myFunction() {
  var x = 5;
  var x_2 = x ** 2;
  var type = typeof {name:'Bill', age:62};
  function toCelsius(fahreheit) {
    return 5 / 9 * (fahreheit  - 32);
  }
  document.getElementById("demo").innerHTML =
  "段落被更改。\r\n" +
  x_2 + " \r\ntype = " +
  type + "\r\n温度：" +
  toCelsius( 90 );
}
