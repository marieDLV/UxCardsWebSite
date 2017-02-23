var mainModule = angular.module('mainController', []);

mainModule.controller('mainController', ['$scope', function($scope){
  var nbCard=14;
  $scope.idCardDisplay=1;

  $scope.cards = [
    {"id":1, "pathrecto":"img/cards/1.png", "pathverso":"img/cards/1V.png", "title":"Boîte de dialogue KO", "group":"BOUTON" },
    {"id":2, "pathrecto":"img/cards/2.png", "pathverso":"img/cards/2V.png", "title":"Boîte de dialogue OK", "group":"BOUTON" },
    {"id":3, "pathrecto":"img/cards/3.png", "pathverso":"img/cards/3V.png",  "title":"Page de destination",  "group":"NAVIGATION" },
    {"id":4, "pathrecto":"img/cards/4.png", "pathverso":"img/cards/4V.png", "title":"Bouton primaire",      "group":"BOUTON" },
    {"id":5, "pathrecto":"img/cards/5.png", "pathverso":"img/cards/5V.png", "title":"Bouton secondaire",    "group":"BOUTON" },
    {"id":6, "pathrecto":"img/cards/6.png", "pathverso":"img/cards/6V.png", "title":"Type de bouton",       "group":"BOUTON" },
    {"id":7, "pathrecto":"img/cards/7.png", "pathverso":"img/cards/7V.png", "title":"F-Layout",             "group":"NAVIGATION" },
    {"id":8, "pathrecto":"img/cards/8.png", "pathverso":"img/cards/8V.png", "title":"Footer menu",          "group":"NAVIGATION" },
    {"id":9, "pathrecto":"img/cards/9.png", "pathverso":"img/cards/9V.png", "title":"Hamburger menu",       "group":"NAVIGATION" },
    {"id":10, "pathrecto":"img/cards/10.png", "pathverso":"img/cards/10V.png", "title":"Header menu",      "group":"NAVIGATION" },
    {"id":11, "pathrecto":"img/cards/11.png", "pathverso":"img/cards/11V.png", "title":"Image 1/2",        "group":"IMAGE" },
    {"id":12, "pathrecto":"img/cards/12.png", "pathverso":"img/cards/12V.png", "title":"Image 2/2",        "group":"IMAGE" },
    {"id":13, "pathrecto":"img/cards/13.png", "pathverso":"img/cards/13V.png", "title":"Tab menu",         "group":"NAVIGATION" },
    {"id":14, "pathrecto":"img/cards/14.png", "pathverso":"img/cards/14V.png", "title":"Z-Layout",            "group":"NAVIGATION" }
  ];


  $scope.piocher = function(){
    var newID = Math.floor((Math.random() * (nbCard-1)) + 1);
    while(newID == $scope.idCardDisplay) {
      newID = Math.floor((Math.random() * (nbCard-1)) + 1);
    }
      $scope.idCardDisplay = newID;
  }

}]);
