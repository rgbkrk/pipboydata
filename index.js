var fs = require('fs');

var demoBin = fs.readFileSync("./DemoMode.bin");
var worldMap = fs.readFileSync("CompanionWorldMap.png");

module.exports = {
  demoBin: demoBin,
  worldMap: worldMap
}
