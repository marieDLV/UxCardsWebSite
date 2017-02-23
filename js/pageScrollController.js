$(document).ready(
      function() {
$('#main').fullpage({
  anchors: ['Pioche', 'Bibliotheque', 'A propos'],
  navigation: true,
  lockAnchors:true,
  autoScrolling: true,
  fitToSection: true,
  verticalCentered: true,
  navigationPosition: 'right',
  navigationTooltips: ['Pioche', 'Bibliothèque', 'A propos'],    //Texte indicatif pour l'utilisateur
  scrollOverflow: true,
  showActiveTooltip: true
  });
});

function moveTo(dest) {
  $.fn.fullpage.moveTo(dest);
}
