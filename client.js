const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "135.23.222.131",
    port: 50542
  });

  conn.on("connect", () => {
    console.log('Successfully connected to game server');
    conn.write('Name: SJ');
    conn.write('Say: Do you see my message?')
  });

  conn.on("data", (message) => {
    console.log(message);
  });
  conn.setEncoding("utf8");

  return conn;
};


module.exports = {connect};
