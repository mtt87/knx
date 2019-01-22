import request from 'superagent';

const baseUrl = 'http://localhost:3000';

export async function getDeviceStatus(device) {
  const res = await request.get(`${baseUrl}/api/${device}`);
  return res.body;
}

export async function changeStatus(id, data) {
  const res = await request.post().send();
  return res.body;
}