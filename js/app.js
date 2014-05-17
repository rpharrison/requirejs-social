requirejs.config({
    "shim": {
      "facebook": {
        exports: "FB"
      }
    },
    "baseUrl": "js/lib",
    "paths": {
      "app": "../app",
      "facebook": "//connect.facebook.net/en_GB/all",
      "facebookLike": "lib/facebook/like",
      "googlePlus": "//apis.google.com/js/plusone",
      "twitter": "//platform.twitter.com/widgets"
    }
});

requirejs(["facebook"]);
requirejs(["facebookLike"]);
requirejs(["twitter"]);
requirejs(["googlePlus"]);
requirejs(["app/main"]);
