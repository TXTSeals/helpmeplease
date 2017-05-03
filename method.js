$(document).on("load", ".export", function(){

  var today = new Date();
  var hour = today.getHours() - 12;
  var minute = today.getMinutes();
  minute = checkTime(minute);

  function checkTime(i) {
      if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
      return i;
  }

  var arrivalTime = document.getElementById("arrivalTime");
  arrivalTime.setAttribute("value", hour + ":" + minute);

});
