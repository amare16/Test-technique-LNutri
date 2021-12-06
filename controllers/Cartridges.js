const { loadCartridges } = require('../models/cartridgesModel');

const getAllCartridges = (req, res) => {
    res.send(loadCartridges());
};

module.exports = getAllCartridges;