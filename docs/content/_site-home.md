# Overview

### External Iframe & SVG

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
  <link rel="shortcut icon" href="https://swanix.org/assets/images/favicon.ico">
  <!-- Styles & Scripts -->
  <link href="https://cdn.jsdelivr.net/gh/swanix/projector@latest/dist/projector.css" rel="stylesheet" >
  <script src="https://cdn.jsdelivr.net/gh/swanix/projector@latest/dist/projector.js"></script>
</head>
<body>
<script>
  svgFile = 'https://swanix.org/diagrams/demo/org-chart/org-chart.svg';
  svgZoom = 0.2;
  svgPanZoom = { 
    zoomFactor: 0.1,
    zoomMin: 0.05, 
    zoomMax: 1.5,
    oneFingerPan: true 
  };
</script>
</body>
</html>
```
