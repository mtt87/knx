const knx = require('knx');
const moment = require('moment-timezone');
const server = require('./src/server');
const database = require('./src/localDb');

const {
  PORT = 3000,
  KNX_IP = '192.168.1.10',
  KNX_PORT = 3671,
} = process.env;

const { db, updateStatus } = database;

const connection = knx.Connection({
  ipAddr: KNX_IP, ipPort: KNX_PORT,
  handlers: {
    connected: startApp(),
    event: function(evt, src, dest, value) {
      const toUpdate = JSON.parse(JSON.stringify(value)).data[0];
      console.log('toUpdate', toUpdate);
      updateStatus(dest, toUpdate)
      const now = moment().tz('Europe/Rome').format('YYYY-MM-DD HH:mm:SS');
      console.log(now, { evt, src, dest, value: JSON.stringify(value) });
    },
  },
});

function startApp() {
  console.log('KNX connected');
  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

// function light1() {
  // connection.write("2/0/0", 0);
  // connection.write("2/0/10", 0);
  // connection.write("2/0/1", 0);
  // connection.write("2/0/11", 0);
  // connection.write("1/0/14", 0);
  // setTimeout(() => {
  //   connection.write("1/0/13", 0);
  // }, 5000);
// }


