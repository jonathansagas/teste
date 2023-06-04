// Notificação de boas-vindas
document.addEventListener('DOMContentLoaded', function() {
  if ('Notification' in window) {
    if (Notification.permission === 'granted') {
      showNotification('Bem-vindo(a) ao nosso site!');
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function(permission) {
        if (permission === 'granted') {
          showNotification('Bem-vindo(a) ao nosso site!');
        }
      });
    }
  }
});

// Notificação de download iniciado
window.addEventListener('load', function() {
  var downloadButton = document.querySelector('.download-button');
  downloadButton.addEventListener('click', function() {
    showNotification('Download iniciado!');
  });
});

// Notificação de fechamento da página
window.addEventListener('beforeunload', function(event) {
  event.preventDefault();
  event.returnValue = '';
  showNotification('Você está prestes a sair do site.');
});

// Função para exibir a notificação
function showNotification(message) {
  if (Notification.permission === 'granted') {
    new Notification(message);
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function(permission) {
      if (permission === 'granted') {
        new Notification(message);
      }
    });
  }
}
