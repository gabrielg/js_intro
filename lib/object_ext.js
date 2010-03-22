Object.create = function (o) {
  function F() {}
  F.prototype = o;
  return new F();
};

Object.extend = function(extension, obj) {
  for (var prop in extension) {
    if (!obj.hasOwnProperty(prop)) { obj[prop] = extension[prop]; }
  };
  return obj;
}

exports.Object = Object;