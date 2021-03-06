(function() {
  var mode = window.location.href.match(/mode=([a-z0-9\-]+)\&?/i);
  var DIST = false;
  var isDev = mode && mode[1] === 'dev';
  var cs = isDev ? 'CesiumUnminified/Cesium.js' : 'Cesium/Cesium.js';
  var ol = (DIST && isDev) ? 'ol3cesium-debug.js' : '@loader';

  if (!window.LAZY_CESIUM) {
    document.write('<scr' + 'ipt type="text/javascript" src="../cesium/Build/' + cs + '"></scr' + 'ipt>');
  }
  document.write('<scr' + 'ipt type="text/javascript" src="../' + ol + '"></scr' + 'ipt>');

  var s;
  window.lazyLoadCesium = function() {
    if (!s) {
      s = document.createElement("script");
      s.type = "text/javascript";
      s.src = '../cesium/Build/' + cs;
      console.log('loading Cesium...');
      document.body.appendChild(s);
    }
    return s;
  };
})();

