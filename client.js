const net = require("net");
const { IP, PORT, name_initial } = require('./constants');

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT 
  });

  conn.on("connect", () => {
    console.log('Successfully connected to game server');
    conn.write(name_initial);
  });

  conn.on("data", (message) => {
    console.log(message);
  });
  conn.setEncoding("utf8");

  return conn;
};


module.exports = {connect};
