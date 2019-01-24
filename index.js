const knx = require('knx');
const moment = require('moment-timezone');
const app = require('./src/server');
const database = require('./src/localDb');
const server = require('http').Server(app);
const io = require('socket.io')(server);

const {
  PORT = 3000,
  KNX_IP = '192.168.1.10',
  KNX_PORT = 3671,
} = process.env;

const { db, updateStatus } = database;

let socket;

const connection = knx.Connection({
  ipAddr: KNX_IP, ipPort: KNX_PORT,
  handlers: {
    connected: startApp(),
    event: function(evt, src, dest, value) {
      const toUpdate = JSON.parse(JSON.stringify(value)).data[0];
      const updatedDb = updateStatus(dest, Number(toUpdate));
      if (socket) {
        socket.emit('update_db', { db: updatedDb })
      }
      const now = moment().tz('Europe/Rome').format('YYYY-MM-DD HH:mm:SS');
      console.log(now, { evt, src, dest, value: JSON.stringify(value) });
    },
  },
});

io.on('connection', s => {
  socket = s;

  socket.emit('load_db', { db });

  socket.on('update_light', (data) => {
    const { id, value } = data;
    connection.write(id, Number(value));
    const updatedDb = updateStatus(id, Number(value));
    socket.emit('update_db', { db: updatedDb });
  });
  
  socket.on('disconnect', () => {
    console.log('User disconnected')
  })
})

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


