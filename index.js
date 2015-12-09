var fs = require('fs');

var demoBin  = fs.readFileSync(path.join(__dirname, "DemoMode.bin"));
var worldMap = fs.readFileSync(path.join(__dirname, "CompanionWorldMap.png"));

module.exports = {
  demoBin: demoBin,
  worldMap: worldMap
}
