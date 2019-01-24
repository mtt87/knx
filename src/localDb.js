const db = {
  '1/0/2': {
    name: 'Lampadario tavolo',
    status: 0,
    type: 'light',
  },
  '1/0/1': {
    name: 'Faretti ingresso',
    status: 0,
    type: 'light',
  },
  '1/0/8': {
    name: 'Faretti tv',
    status: 0,
    type: 'light',
  },
  '1/0/3': {
    name: 'Faretti cucina',
    status: 0,
    type: 'light',
  },
  '1/0/4': {
    name: 'Luci scala',
    status: 0,
    type: 'light',
  },
  '1/0/7': {
    name: 'Luci sala',
    status: 0,
    type: 'light',
  },
  '1/0/12': {
    name: 'Faretti anticamera notte',
    status: 0,
    type: 'light',
  },
  '1/0/18': {
    name: 'Camera Mattia',
    status: 0,
    type: 'light',
  },
  '1/0/13': {
    name: 'Luce bagno',
    status: 0,
    type: 'light',
  },
  '1/0/14': {
    name: 'Luce bagno specchio',
    status: 0,
    type: 'light',
  },
  '1/0/15': {
    name: 'Camera Mariarosa',
    status: 0,
    type: 'light',
  },
  '1/0/9': {
    name: 'Luce lavanderia',
    status: 0,
    type: 'light',
  },
  '1/0/11': {
    name: 'Luce bagnetto',
    status: 0,
    type: 'light',
  },
  '1/0/10': {
    name: 'Luce box',
    status: 0,
    type: 'light',
  },
  '1/0/6': {
    name: 'Luce soppalco cassettiera',
    status: 0,
    type: 'light',
  },
  '1/0/5': {
    name: 'Luce soppalco scrivania',
    status: 0,
    type: 'light',
  },
};

const updateStatus = (id, status) => {
  if (db[id]) {
    db[id] = {
      ...db[id],
      status,
    };
  }
  return db;
}

module.exports = {
  db,
  updateStatus,
}