document.addEventListener('DOMContentLoaded', () => {
  let palette = document.querySelector('.palette');
  let currentColor = '';
  let pWidth = 50;
  let pHeight = 50;
  let cWidth = 400;
  let cHeight = 400;

  // Set the pixel color
  /*canvas.addEventListener('click', (e) => {
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
  });*/

  // Select the Color from the palette
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

  render(pWidth, pHeight, cWidth, cHeight);
});

function render (pWidth, pHeight, cWidth, cHeight) {
  let canvas = document.createElement('div');
  canvas.style.width = cWidth + 'px';
  canvas.style.height = cHeight + 'px';
  canvas.style.fontSize = 0;
  canvas.style.outline = '2px solid black'
  document.body.prepend(canvas);

  var renderPixel = function (width, height) {
    let pixel = document.createElement('div');
    pixel.style.width = width + 'px';
    pixel.style.height = height + 'px';
    pixel.style.display = 'inline-block';
    pixel.style.outline = '1px dashed grey';
    canvas.append(pixel);
  };

  for (let h = 0; h < cHeight; h += pHeight) {
    for (let w = 0; w < cWidth; w += pWidth) {
      renderPixel(pWidth, pHeight);
    }
  }


}
