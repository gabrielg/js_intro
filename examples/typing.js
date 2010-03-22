var sys = require("sys");
var demo = require("../lib/demo");

demo.define("dynamic_typing", function(){
  // album starts off as a string
  var album = 'heroes';
  sys.puts(album);
  
  // the language allows the same variable to be an integer
  var album = 3;
  sys.puts(album);  
});

demo.define("duck_typing", function(){
  var customObject = {};
  customObject.toString = function() { return "i'm a custom object"; };
  // sys.puts doesn't care what you hand it, as long as it can behave like a string
  sys.puts(customObject);
});

demo.define("boolean_coercion", function() {
  // Implicit type coercion to booleans WILL bite you
  if (0) {
    sys.puts("We never get here");
  };

  if ('') {
    sys.puts("Nor here");
  };

  var status = 0;

  // Strict equality operators are your friend
  if (status !== false) {
    sys.puts("We want to get here");
  };  
});

demo.define("type_coercion", function(){
  // Watch for implicit type conversation between strings and numeric types
  sys.puts(3 + '5');  
})

demo.run();