requirejs.config({
  baseUrl: ".",
  paths: {
  "bootstrap": "/node_modules/bootstrap/dist/js/bootstrap.min",
  "jquery": "/node_modules/jquery/dist/jquery.min",
  "ko": "/node_modules/knockout/build/output/knockout-latest.debug",
  "text": "/node_modules/requirejs-text/text"
  },
  shim: {
  "bootstrap": { deps: ["jquery"] },
  "ko": { deps: ["jquery"] },
  }
 });


