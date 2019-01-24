import React, { Component } from 'react';
import { ActivityIndicator, View, Text, ScrollView } from 'react-native';
import SmartSwitch from './SmartSwitch';
import socketIOClient from "socket.io-client";

const config = require('./config.json');

class App extends Component {
  constructor() {
    super();
    this.socket = socketIOClient('/');
    this.state = {
      config: {},
      db: null
    }
  }
  componentDidMount() {
    // fetch config
    this.socket.on('load_db', (data) => {
      const { db } = data;
      this.setState({ db });
    });

    this.socket.on('update_db', (data) => {
      const { db } = data;
      this.setState({ db });
    })
  }

  updateLight = (id, value) => {
    this.socket.emit('update_light', { id, value });
  }

  render() {
    const { db } = this.state;
    if (!db) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'column'}}>
          <Text style={{ textAlign: 'center', marginBottom: 20 }}>Connessione a locale...</Text>
          <ActivityIndicator size="large" />
        </View>
      )
    }
    return (
      <ScrollView contentContainerStyle={{ paddingVertical: 10 }}>
        {config.map(room => (
          <View key={room.roomId} style={{ paddingVertical: 10, borderBottomColor: '#ccc', borderBottomWidth: 1, paddingHorizontal: 15 }}>
            <Text style={{ fontSize: 19, fontWeight: '500', marginBottom: 5 }}>
              {room.roomName}
            </Text>
            {room.devices.map(device => (
              <View key={device.deviceId} style={{ paddingVertical: 5 }}>
                <SmartSwitch
                  value={db[device.deviceId].status}
                  name={device.deviceName}
                  id={device.deviceId}
                  onValueChange={(val) => this.updateLight(device.deviceId, val)}
                />
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    );
  }
}

export default App;
