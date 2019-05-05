// This is a real pain in the neck...
const Layouts = {
  complex: require("../layouts/complex.layout.json"),
  default: require("../layouts/default.layout.json"),
  justsplitters: require("../layouts/justsplitters.layout.json"),
  preferred: require("../layouts/preferred.layout.json"),
  simple: require("../layouts/simple.layout.json"),
  simplewithadd: require("../layouts/simplewithadd.layout.json"),
  sub: require("../layouts/sub.layout.json"),
  trader: require("../layouts/trader.layout.json")
};

class Utils {
  static importFile(
    // importPath: string,
    importName: string,
    onSuccess: any,
    onError: any
  ) {
    console.log("ImportFile: " + importName);
    if (importName) {
      try {
        // const json = require(importName);
        const json = Layouts[importName];
        onSuccess(json);
      } catch (exception) {
        console.warn(exception);
        onError(exception);
      }
    }
  }

  static downloadFile(
    // Won't work on this demo?
    downloadUrl: any,
    onSuccess: any,
    onError: any
  ) {
    console.log("DownloadFile: " + downloadUrl);
    if (downloadUrl) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", downloadUrl);
      xhr.onload = function() {
        if (xhr.status == 200) {
          onSuccess(xhr.responseText);
        } else {
          onError(xhr.status + " " + xhr.statusText);
        }
      };
      xhr.onerror = function(e) {
        console.log(e);
        onError(e);
      };
      xhr.send();
    }
  }

  static getQueryParams() {
    var a = window.location.search.substr(1);
    if (a == "") return {};
    var params = a.split("&");
    var b: any = {};
    for (var i = 0; i < params.length; ++i) {
      var p = params[i].split("=", 2);
      if (p.length == 1) b[p[0]] = "";
      else b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
  }
}

export default Utils;
