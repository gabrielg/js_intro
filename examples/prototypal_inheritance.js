var sys = require("sys");
var demo = require("../lib/demo");

var basePoint = {
  x: 0,
  y: 0,
  
  toString: function() {
    return "x: " + this.x + ", y: " + this.y;
  },
  
  distance: function(otherPoint) {
    return Math.sqrt(Math.pow(otherPoint.x - this.x, 2) + Math.pow(otherPoint.y - this.y, 2))
  }
};

function Point(x, y) {
  this.x = x;
  this.y = y;
};

Point.prototype = basePoint; // Sets the prototype for all objects constructed via 'new Point' to be
                             // basePoint


// As a note, all JavaScript objects are open to add properties to
// This function implements true prototypal inheritance
Object.create = function (o) {
  function F() {}
  F.prototype = o;
  return new F();
};
    
// This isn't truly prototypal, and is a flaw in JavaScript
demo.define("object_constructor_prototype", function() {
  var pointA = new Point(4, 5);
  var pointB = new Point(4, 10);
  sys.puts("distance between pointA and pointB: " + pointA.distance(pointB));
});

// This is truly prototypal
demo.define("object_prototype", function() {
  var pointA = Object.create(basePoint);
  var pointB = Object.create(basePoint);
  pointA.x = 4, pointA.y = 5;
  pointB.x = 4, pointB.y = 10;
  sys.puts("distance between pointA and pointB: " + pointA.distance(pointB));
});

// This is how we can 'extend' an object in prototypal inheritance
var base3DPoint = Object.create(basePoint);
base3DPoint.z = 0;
base3DPoint.toString = function() {
  return "x: " + this.x + ", y: " + this.y + ", z: " + this.y;
},

base3DPoint.distance = function(otherPoint) {
  return Math.sqrt(Math.pow(otherPoint.x - this.x, 2) + Math.pow(otherPoint.y - this.y, 2) + Math.pow(otherPoint.z - this.z, 2))
}

demo.define("prototypal_inheritance", function() {
  var pointA = Object.create(base3DPoint);
  var pointB = Object.create(base3DPoint);
  pointA.x = 4, pointA.y = 5, pointA.z = 10;
  pointB.x = 4, pointB.y = 10, pointB.z = 10;
  sys.puts("pointA: " + pointA.toString());
  sys.puts("pointB: " + pointB.toString());
  sys.puts("distance between pointA and pointB: " + pointA.distance(pointB));
});

demo.run();
