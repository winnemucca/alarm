$(document).on('ready', function() {

  var outerShell = $('<div class="outer-shell"></div>');
  var innerShell = $('<div class="inner-shell"></div>');
  

  var labels = $('<div class="white-words">PM <br> <br> <br>AUTO</div>');
  var clockScreen = $('<div class="clock-screen"></div>');
  

  var redDot= $('<div class="indicator"</div>');
  var text = $('<div class="screen-text">10:00</div>');
  var bottomAm = $('<div class="frequencyAm"> AM 50  60  70  80<br> PM 92 96 102</div>');
  var bottomPm = $('<div class="frequencyPm"></div>');

  $('.alarmPhoto').append(outerShell);
  (outerShell).append(innerShell);
  (innerShell).append(labels);
  (labels).append(clockScreen);

  // (innershell).append(clockScreen);
  
  (clockScreen).append(redDot);
  (redDot).append(text);
  (text).append(bottomAm);
  (bottomAm).append(bottomPm);
});