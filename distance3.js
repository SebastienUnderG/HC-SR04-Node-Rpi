//Administration
var minD = 10 * (1e6 / 34321) * 2; //zone minimum
var maxD = 50 * (1e6 / 34321) * 2; //zone maximum
var timeStep = 1000; //zone de statisme
var updateTime = 200; //frequence de mise a jour de la position
var step = 0; // init de l'étape
var 


console.log("Trigger on 23 and Echo on 24 ");

var Gpio = require('pigpio').Gpio,
  trigger = new Gpio(23, {mode: Gpio.OUTPUT}),
  echo = new Gpio(24, {
    mode: Gpio.INPUT,
    alert: true
  });

// The number of microseconds it takes sound to travel 1cm at 20 degrees celcius
var MICROSECDONDS_PER_CM = 1e6 / 34321;

trigger.digitalWrite(0); // Make sure trigger is low

(function() {
  var startTick;

  echo.on('alert', function(level, tick) {
    var endTick,
      diff;

    if (level == 1) {
      startTick = tick;
    } else {
      endTick = tick;
      diff = (endTick >> 0) - (startTick >> 0); // Unsigned 32 bit arithmetic
      // console.log(diff / 2 / MICROSECDONDS_PER_CM);
      if (diff <= maxD && diff >= minD) {
        step++;
      } else {
        step = 0;
      }

      if (step >= (timeStep / updateTime)) {
        console.log("devant" + step);
      }

    }

  }); // fin de echo

}()); // fin de fonction

// Trigger a distance measurement once per second
setInterval(function() {
  trigger.trigger(10, 1); // Set trigger high for 10 microseconds
}, 200);
