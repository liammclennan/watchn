var util = require("util");
var fs = require("fs");

var watch = function(path, filePattern, callback) {
  fs.stat(path, function(err, stats){
    if (err) {
      util.error('Error retrieving stats for file: ' + path);
    } else {
      if (stats.isDirectory()) {
        fs.readdir(path, function(err, fileNames) {
          if(err) {
            util.error('Error reading path: ' + path);
          }
          else {
            fileNames.forEach(function (fileName) {
              watch(path + '/' + fileName, filePattern, callback);
            });
          }
        });
      } else {
        if (path.match(filePattern)) {
          fs.watchFile(path, function(curr, prev) {
            callback(path, curr, prev);
          });
        }
      }
    }
  });
};

exports.watch = watch;
