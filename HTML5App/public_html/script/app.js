// create the module and name it myApp

var myApp = angular.module('myApp', []);

myApp.controller("myController", function ($filter) {
  this.userName = "";
  this.text = "";
  this.camelCase = function(){
    this.text = $filter('camelCase')(this.text);
    alert(this.text);
  };
});

myApp.filter('reverse', function () {
  return function (x) {
    var i, c, txt = "";
    for (i = (x.length - 1); i >= 0; i--) {
      c = x[i];
      txt += c;
    }
    return txt;
  };
});
myApp.filter('alternateUppercase', function () {
  return function (x) {
    var i, c, txt = "";
    for (i = 0; i < x.length; i++) {
      c = x[i];
      if (i % 2 == 0) {
        c = c.toUpperCase();
      }
      txt += c;
    }
    return txt;
  };
});
myApp.filter('camelCase', function () {
  return function (x) {
    var newX = x.toString().trim();
    var i, c, txt = "";
    for (i = 0; i < newX.length; i++) {
      c = x[i];
      if (c == " ") {
        c=x[++i];
        c = c.toUpperCase();
      }
      txt += c;
    }
    return txt;
  };
});

