# GoraPicker

A demo project intended to demonstrate cordobas abilities.

### Basic Guide

How to create a demo project with electron

```bash
npm install -g cordova
cordova create MyApp
cd MyApp && cordova platform add browser
```

Blast It!

```bash
cordova run <platform> # in our case browser
```

## Vue!

this section was largely based on the following [link](https://medium.com/@valeriocapogna/how-to-setup-a-cordova-app-using-vue-js-8ba1315b9666)

```
vue init webpack <project-name>
```

modify index.html beware production parts

```html
<html>
  <head>
    <meta charset=”utf-8">
    <meta name=”format-detection” content=”telephone=no”>
    <meta name=”msapplication-tap-highlight” content=”no”>
    <meta name=”viewport” content=”user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width”>
    <!--meta http-equiv=”Content-Security-Policy” content=”default-src ‘self’ data: gap: https://ssl.gstatic.com ‘unsafe-eval’; style-src ‘self’ ‘unsafe-inline’; media-src *; img-src ‘self’ data: content:; connect-src ‘self’ ws:;”-->
    <title>Project Name</title>
    <script src=”cordova.js”></script>
  </head>  <body>
    <div id=”app”></div>
    ...
```

Patch config/index.js

```js
build: {
  index: path.resolve(__dirname, ‘../www/index.html’),
  assetsRoot: path.resolve(__dirname, ‘../www’),
  assetsSubDirectory: ‘static’,
  assetsPublicPath: ‘’
}
```

And everything should be fine

## Plugins

Camera - https://github.com/apache/cordova-plugin-camera
QR Scanner - https://www.npmjs.com/package/cordova-plugin-qrscanner
File Abstraction Library - https://github.com/apache/cordova-plugin-file
