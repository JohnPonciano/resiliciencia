const catImg = document.getElementById('cat');
const message = document.getElementById('message');

// Adiciona a trilha sonora de fundo
const backgroundAudio = new Audio('trilha.mp3');
backgroundAudio.loop = true;
backgroundAudio.play();

// Adiciona o evento de clique na imagem do gato
catImg.addEventListener('click', () => {
  // Altera a imagem do gato e inicia a animação
  catImg.src = 'sleeping-cat.gif';
  catImg.style.animation = 'fall 2s ease forwards';

  // Adiciona o efeito sonoro de "mew"
  const mewSound = new Audio('mew.mp3');
  mewSound.play();

  // Atualiza a mensagem
  message.textContent = 'Os Gatos pois eles sempre caem de pé!!';

  // Define um tempo limite para a próxima etapa
  setTimeout(() => {
    // Move a imagem do gato para fora da tela
    catImg.style.transform = 'translate(-100%, 0)';
    catImg.src = 'wakeup-cat.gif';
  }, 1000);
});
