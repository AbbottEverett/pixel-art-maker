document.addEventListener('DOMContentLoaded', () => {
  let canvas = document.querySelector('.canvas');
  let palette = document.querySelector('.palette');
  let currentColor = '';

  canvas.addEventListener('click', (e) => {
    let pixel = e.target;
    let pixelColor = pixel.classList[1];
    if (!pixelColor) {
      pixel.classList.add(currentColor);
    } else if (pixelColor !== currentColor) {
      pixel.classList.remove(pixelColor);
      pixel.classList.add(currentColor);
    } else if (pixelColor === currentColor) {
      pixel.classList.remove(pixelColor);
    }
  });

  palette.addEventListener('click', (e) => {
    let selectedColor = e.target;
    if (selectedColor.id !== 'selected') {
      var oldColor = document.getElementById('selected');
      if (oldColor) {
        oldColor.setAttribute('id', '');
      }
      selectedColor.setAttribute('id', 'selected');
      currentColor = selectedColor.classList[0];
    }
  });

});
