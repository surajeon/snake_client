const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "135.23.222.131",
    port: 50542
  });

  conn.on("connect", () => {
    console.log('Successfully connected to game server');
    conn.write('Name: SJ');

    let num = 15;
    holdTime = 50;
    for (let i = 0; i < num; i ++) {
      setTimeout(() => {
        setTimeout(() => {
          conn.write('Move: left');          
        }, holdTime);
        conn.write('Move: down');
      }, holdTime);
      holdTime += 50;
    }

  });

  conn.on("data", (message) => {
    console.log(message);
  });
  conn.setEncoding("utf8");

  return conn;
};


module.exports = {connect};