var libraryModule = angular.module('libraryController', []);

libraryModule.controller('libraryController', ['$rootScope','$scope', function($rootScope, $scope, $timeout){
  $scope.recto = true;
  $scope.verso = false;
  var modal = document.getElementById('myModal');


  $scope.select = "red";
  $( document )
    .on( "mousemove", ".ItemCard", function( event ) {
    var halfW = ( this.clientWidth / 2 );
    var halfH = ( this.clientHeight / 2 );

    var coorX = ( halfW - ( event.pageX - this.offsetLeft ) );
    var coorY = ( halfH - ( event.pageY - this.offsetTop ) );

    var degX  = ( ( coorY / halfH ) * 5 ) + 'deg'; // max. degree = 10
    var degY  = ( ( coorX / halfW ) * -5 ) + 'deg'; // max. degree = 10

    $( this ).css( 'transform', function() {
      return 'perspective( 600px ) translate3d( 0, -2px, 0 ) scale(1.1) rotateX('+ degX +') rotateY('+ degY +')';
    } )
      .children( '.ItemCard__summary' )
      .css( 'transform', function() {
      return 'perspective( 600px ) translate3d( 0, 0, 0 ) rotateX('+ degX +') rotateY('+ degY +')';
    } );
  })
    .on( "mouseout", ".ItemCard", function() {
    $( this ).removeAttr( 'style' )
      .children( '.ItemCard__summary' )
      .removeAttr( 'style' );
  } );

//Active tab
$scope.tab = 1;

$scope.selectTab = function(newTab){
    $scope.tab = newTab
};
$scope.isSet = function(tabNum){
     return $scope.tab === tabNum;
};

$scope.growCard = function($index){
  modal.style.opacity = 1;
  modal.style.display = "flex";
  switch($scope.tab) {
    case 1 :
      document.getElementById('lightbox-image-left').src = $scope.cards[$index].pathrecto;
      document.getElementById('lightbox-image-right').src = $scope.cards[$index].pathverso;
    break;
    case 2:
    var temp = [];
      $scope.cards.forEach(function (card) {
        if(card.group == 'BOUTON')
          temp.push(card);
      });
      document.getElementById('lightbox-image-left').src = temp[$index].pathrecto;
      document.getElementById('lightbox-image-right').src = temp[$index].pathverso;
    break;
    case 3:
    var temp = [];
      $scope.cards.forEach(function (card) {
        if(card.group == 'NAVIGATION')
          temp.push(card);
      });
      document.getElementById('lightbox-image-left').src = temp[$index].pathrecto;
      document.getElementById('lightbox-image-right').src = temp[$index].pathverso;
    break;
  }

};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == document.getElementById('contentModal') ||event.target == document.getElementById('myModal')) {
        modal.style.display = "none";
    }
  }

}]);
