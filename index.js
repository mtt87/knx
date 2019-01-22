const knx = require('knx');
const express = require('express');
const app = express();

const { PORT = 3000 } = process.env;

const connection = knx.Connection({
  ipAddr: '192.168.1.10', ipPort: 3671,
  handlers: {
    connected: startApp(),
    event: function(evt, src, dest, value) {
      // TODO add fn() to handle events
      const now = new Date()
        .toISOString()
        .replace(/T/, ' ')
        .replace(/\..+/, '');
      console.log({ evt, src, dest, value: JSON.stringify(value) });
    },
  },
});

app.get('/', (req, res) => {

});

function startApp() {
  app.listen(PORT, () => {
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


