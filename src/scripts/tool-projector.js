/*!
 * Swanix - Tool Projector
 * https://github.com/swanix/tool-projector
 * @license MIT
 * Based on SVG.js
*/

function initProjector() {

  // Load SVG file 
  // Based on https://dev.to/lucafaggianelli/interactive-svg-js-map-2ind
  fetch(svgFile)
  // SVG text as a string
  .then(response => response.text())
  .then((image) => {
    let startOfSvg = image.indexOf('<svg')
    startOfSvg = startOfSvg >= 0 ? startOfSvg : 0
    // Draw SVG file
    var canvas = SVG(image.slice(startOfSvg));
    canvas.addTo('#canvas')
    canvas.size('100vw', '100vh')
    canvas.zoom(svgZoom)
    canvas.panZoom(svgPanZoom)
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
  // Fullscreen action on button
  document.getElementById("btn-fullscreen").addEventListener("click", toggleFullScreen, false);
}

// Create the UI & Canvas
var pageTitle = document.title;

const uiTemplate = `
<div id="canvas">
  <div class="file-title">${pageTitle}</div>
  <button class="button fullscreen" id="btn-fullscreen">⤢</button>
</div>
`;

function createUi() {
  let uiProjector = document.createElement('div');
  uiProjector.id = "projector";
  uiProjector.innerHTML = uiTemplate;
  document.body.insertAdjacentElement("afterbegin", uiProjector);
};

document.addEventListener('DOMContentLoaded', function() {
  createUi();
  initProjector();
});