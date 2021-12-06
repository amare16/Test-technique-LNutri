const { readFileSync } = require('fs');
const path = require('path');
const jsonFilePath = path.join(__dirname, '../dataFromJson/allCartridges.json')
let loadCartridges = () => JSON.parse(readFileSync(jsonFilePath));

module.exports = { loadCartridges };