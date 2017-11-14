document.addEventListener('DOMContentLoaded', () => {
  let canvas = document.querySelector('.canvas');
  let palette = document.querySelector('.palette');
  let currentColor = 'red';

  canvas.addEventListener('click', (e) => {
    let pixel = e.target;
    let pixelColor = pixel.classList[1];
    if (!pixelColor) {
      pixel.classList.add(currentColor);
    } else if (pixelColor !== currentColor) {
      pixel.classList.remove(pixelColor);
      pixel.classList.add(currentColor);
    }
  });
  palette.addEventListener('click', (e) => {
    currentColor = e.target.classList[0];
  });
});
