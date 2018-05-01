const Gpio = require('onoff').Gpio;
const relayA = new Gpio(15, 'out');
const buttonA = new Gpio(17, 'in', 'both', {debounceTimeout: 500});
const buttonB = new Gpio(27, 'in', 'both', {debounceTimeout: 50});
const buttonC = new Gpio(22, 'in', 'both', {debounceTimeout: 50});
const buttonD = new Gpio(14, 'in', 'both', {debounceTimeout: 500});
//relayA.writeSync(value);

buttonA.watch(function (err, value) {
  if (value == "1"){
    	console.log("XXX-A-XXX");

  	}
  console.log("Bouton A : "+value);
});

buttonB.watch(function (err, value) {
if (value == "1"){
  	console.log("XXX-B-XXX");

	}
});

buttonC.watch(function (err, value) {
  if (value == "1"){
    	console.log("XXX-C-XXX");

  	}
  console.log("Bouton C : "+value);
});

buttonD.watch(function (err, value) {
  if (value == "1"){
    	console.log("XXX-D-XXX");

  	}
  console.log("Bouton D : "+value);
});
