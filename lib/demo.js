var sys = require("sys");

var demos = {};

exports.define = function(name, func) {
  demos[name] = func;
};

exports.run = function() {
  var demoName = process.argv[2];
  if (demoName === undefined) {
    sys.puts("A demo to run must be specified.");
    process.exit(1);
  } else if (demos[demoName] === undefined) {
    sys.puts("Demo " + demoName + " is not defined.");
    process.exit(1);
  } else {
    demos[demoName].apply(null, process.argv.slice(3));
    process.exit(0);
  }
};