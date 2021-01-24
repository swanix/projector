/*!
 * Swanix Projector
 * https://github.com/swanix/projector
 * @license MIT
 * Based on SVG.js
*/

function projector() {

  // Load SVG file 
  // Based on https://dev.to/lucafaggianelli/interactive-svg-js-map-2ind
  
  fetch(svgFile)
  // Get the raw text of SVG file as a string
  .then(response => response.text())
  .then((image) => {
    // Workaround for a strange behavior (a bug?) of svg.js 
    let startOfSvg = image.indexOf('<svg')
    startOfSvg = startOfSvg >= 0 ? startOfSvg : 0
    // Draw SVG file
    const canvas = SVG(image.slice(startOfSvg))
    .addTo('#canvas')
    .size('100vw', '100vh')
    .zoom(0.1) // uses center of viewport by default
    .panZoom({ zoomMin: 0.05, zoomMax: 1.5 })

    // Prevent click on panning
    canvas.on('panning', function (ev) {
      let links = document.getElementsByTagName("a");
      for (let i = 0; i < links.length; i++) {
        links[i].onclick = function() {return false;};
      }
    })
    canvas.on('click', function (ev) {
      let links = document.getElementsByTagName("a");
      for (let i = 0; i < links.length; i++) {
        links[i].setAttribute('target', '_blank');
        links[i].onclick = function() {return true;};
      }
    })
  })

  // Fullscreen Mode
  // Based on https://developer.mozilla.org/es/docs/Web/API/Fullscreen_API

  function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  document.getElementById("btn-fullscreen").addEventListener("click", toggleFullScreen, false);

}

document.addEventListener("DOMContentLoaded", projector)