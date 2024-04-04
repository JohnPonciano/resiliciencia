const catImg = document.getElementById('cat');
const message = document.getElementById('message');

catImg.addEventListener('click', () => {
  catImg.src = 'sleeping-cat.gif';
  catImg.style.animation = 'fall 2s ease forwards';
  message.textContent = 'Os Gatos pois eles sempre caem de pé!! ';
  

  setTimeout(() => {
    
    catImg.style.transform = 'translate(-100%, 0)';
    catImg.src = 'wakeup-cat.gif';
  }, 1000);
});
