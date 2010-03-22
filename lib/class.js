var sys = require("sys");

var Class = {
  create: function() {
    if (arguments.length == 1) {
      return this._createWithParent(BasicObject, arguments[0]);
    } else if (arguments.length == 2) {
      return this._createWithParent(arguments[0], arguments[1]);
    }
  },
  
  _createWithParent: function(parent, classDef) {
    var constructor = function() {
      (this.initialize || function () {}).apply(this, Array.prototype.slice.call(arguments));
    };  
    var clonedClassDef = BasicObject.mixin(classDef, {});
    BasicObject.mixin(parent.prototype, clonedClassDef);
    clonedClassDef.callSuper = function(methodName) {
      var args = Array.prototype.slice.call(arguments, 1)
      if (parent.prototype.hasOwnProperty(methodName)) {
        return parent.prototype[methodName].apply(this, args);
      } else {
        return parent.prototype.callSuper.apply(parent.prototype, Array.prototype.slice.call(arguments));
      }
    };
    constructor.prototype = clonedClassDef;
    return constructor;
  }
};

var BasicObject = function() {};
BasicObject.prototype = {
  callSuper: function(methodName) {
    throw("No such method: " + methodName);
  },
  
  inspect: function() {
    return JSON.stringify(this);
  }
};

BasicObject.mixin = function(mixin, obj) {
  for (var prop in mixin) {
    if (!obj.hasOwnProperty(prop)) { obj[prop] = mixin[prop]; }
  };
  return obj;
}

exports.Class = Class;