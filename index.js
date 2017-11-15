document.addEventListener('DOMContentLoaded', () => {
  let currentColor = '';
  let sizes = {
    pWidth: 50,
    pHeight: 50,
    cWidth: 500,
    cHeight: 500,
    sWidth: 50,
    sHeight: 50,
    sMargin: 10
  };
  let colorsList = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'black', 'white', 'magenta'];

  render(sizes, colorsList);
  let canvas = document.querySelector('.canvas');
  let palette = document.querySelector('.palette');

  // Select the Color from the palette
  palette.addEventListener('click', (e) => {
    let selectedColor = e.target;
    if (selectedColor.id !== 'selected') {
      let oldColor = document.getElementById('selected');
      if (oldColor) {
        oldColor.setAttribute('id', '');
      }
      selectedColor.setAttribute('id', 'selected');
      currentColor = selectedColor.style.backgroundColor;
    }
  });

  // Set the pixel color
  canvas.addEventListener('click', (e) => {
    let pixel = e.target;
    let pixelColor = pixel.style.backgroundColor;
    if (pixelColor === currentColor) {
      pixel.style.backgroundColor = 'white';
    } else {
      pixel.style.backgroundColor = currentColor;
    }
  });

});

function render (sizes, colorsList) {
  let canvas = document.createElement('div');
  canvas.style.width = sizes.cWidth + 'px';
  canvas.style.height = sizes.cHeight + 'px';
  canvas.classList.add('canvas');
  document.body.append(canvas);

  let palette = document.createElement('div');
  palette.style.width = ((sizes.sHeight + sizes.sMargin * 2) * colorsList.length) + 'px';
  palette.style.height = (sizes.sHeight + sizes.sMargin * 2) + 'px';
  palette.classList.add('palette');
  document.body.append(palette);

  let renderPaletteSwatch = function(color) {
      let swatch = document.createElement('div');
      swatch.style.width = sizes.sWidth + 'px';
      swatch.style.height = sizes.sHeight + 'px';
      swatch.style.margin = sizes.sMargin + 'px';
      swatch.style.backgroundColor = color;
      swatch.classList.add('swatch');
      palette.append(swatch);
  };

  colorsList.forEach((element) => {
    renderPaletteSwatch(element);
  });

  let renderPixel = function (width, height) {
    let pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.style.width = width + 'px';
    pixel.style.height = height + 'px';
    pixel.style.backgroundColor = 'white';
    canvas.append(pixel);
  };

  for (let h = 0; h < sizes.cHeight; h += sizes.pHeight) {
    for (let w = 0; w < sizes.cWidth; w += sizes.pWidth) {
      renderPixel(sizes.pWidth, sizes.pHeight);
    }
  }


}
