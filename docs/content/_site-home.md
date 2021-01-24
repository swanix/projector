# Overview

### Iframe external SVG

<iframe allowfullscreen frameborder="0" style="width:780px; height:480px" src="./demo/"></iframe>

HTML file with external SVG:

```
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="robots" content="noindex, nofollow">
  <title>Swanix Projector - Demo</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <!-- Favicon -->
  <link rel="shortcut icon" href="assets/images/favicon.ico">
  <!-- Styles & Scripts -->
  <link href="../dist/projector.css" rel="stylesheet" >
  <script src="../dist/projector.js"></script>
  <!-- SVG File -->
  <script>
    svgFile = 'https://swanix.org/diagrams/demo/org-chart/org-chart.svg';
  </script>
</head>
<body>
<div id="canvas">
  <button id="btn-fullscreen">⤡</button>
</div>
</body>
</html>
```