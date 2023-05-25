
var featureItems = document.querySelectorAll('.feature-item');


featureItems.forEach(function(item) {
  item.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
    this.style.transition = 'transform 0.3s ease';
  });

  item.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
    this.style.transition = 'transform 0.3s ease';
  });
});


function showDownloadMessage() {
  alert('O download do aplicativo começará em breve!');
}


var downloadButton = document.querySelector('.download-button');


downloadButton.addEventListener('click', showDownloadMessage);


function showFeedbackMessage() {
  alert('Obrigado pelo seu feedback! Sua opinião é muito importante para nós.');
}


var titles = document.querySelectorAll('.title');


titles.forEach(function(title) {
  title.addEventListener('dblclick', showFeedbackMessage);
});


function confirmExit() {
  return 'Tem certeza de que deseja sair desta página? Suas alterações não salvas serão perdidas.';
}


window.addEventListener('beforeunload', function(e) {
  e.preventDefault();
  e.returnValue = confirmExit();
});
