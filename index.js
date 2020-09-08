const moment = require('moment');
const Log = console.log;
console.log = () => {};
module.exports = (...args) => Log(moment(), ...args);