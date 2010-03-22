var sys = require("sys");
var demo = require("../lib/demo");

demo.define("global_scoping", function() {
  // Never ever do this
  globalScopingSideEffect = "wuh oh";
});

demo.define("local_scoping", function() {
  // Declare or define your variables like so
  var emptyLocalVar;
  var localVar = "this is safer";
  sys.puts(localVar);
});

demo.define("defaulting", function(){
  // A variable can be defaulted with the || operator
  var uninitialized = undefined;
  uninitialized = uninitialized || "now initialized";
  sys.puts(uninitialized);
});

demo.run();

if (typeof globalScopingSideEffect !== 'undefined') {
  sys.puts(globalScopingSideEffect);
}