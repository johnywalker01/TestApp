// create the module and name it myApp

var myApp = angular.module('myApp', []);

myApp.controller("myController", function ($scope,$filter) {
  this.string = "";
  this.resultString = "";
  this.convertToReverse = function(){
    this.resultString = $filter('reverse')(this.string);
  };
  this.convertToAlternateUppercase = function(){
    this.resultString = $filter('alternateUppercase')(this.string);
  };
  this.convertToCamelCase = function () {
    this.resultString = $filter('camelCase')(this.string.trim());
  };
  this.myTime = Date();
  this.foo1 = function () {
    this.myTime = Date();
    alert(this.myTime);
    this.myTime = setTimeout($scope.foos, 5000);
    alert("this should happen after 5 seconds");
  };
  $scope.foos = function () {
    $scope.newTime = Date();
    alert($scope.newTime);
    return $scope.newTime = Date();
  };
  this.foo2 = function () {
    setTimeout("alert('this alert is timedout and should be the first');", 5000);
    alert("this should be the second one");
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
        c = x[++i];
        if(c == " "){
          --i;
          continue;
        }
        c = c.toUpperCase();
      }
      txt += c;
    }
    return txt;
  };
});

