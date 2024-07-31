
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  
  window.onload = () => {
    // Inicializa a trilha sonora de fundo
    const backgroundAudio = new Audio('planta.mp3');
    backgroundAudio.loop = true;
    backgroundAudio.volume = 0.5; // Ajuste o volume conforme necessário
    backgroundAudio.play();
  
    // Remove a classe "not-loaded" após um atraso de 1 segundo
    setTimeout(() => {
      document.body.classList.remove("not-loaded");
    }, 1000);
  };
  