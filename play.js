// const connect = require('./client');

const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting...");

// connect();
const connectionObj = connect();
setupInput(connectionObj);
