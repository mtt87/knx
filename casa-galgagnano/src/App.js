import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import SmartSwitch from './SmartSwitch';

const config = require('./config.json');

class App extends Component {
  state = {
    loaded: false,
    config: {},
  }
  componentDidMount() {
    // fetch config
  }
  render() {
    return (
      <ScrollView contentContainerStyle={{ paddingVertical: 10 }}>
        {config.map(room => (
          <View key={room.roomId} style={{ paddingVertical: 10, borderBottomColor: '#ccc', borderBottomWidth: 1, paddingHorizontal: 15 }}>
            <Text style={{ fontSize: 19, fontWeight: '500', marginBottom: 5 }}>
              {room.roomName}
            </Text>
            {room.devices.map(device => (
              <View key={device.deviceId} style={{ paddingVertical: 5 }}>
                <SmartSwitch name={device.deviceName} id={device.deviceId} />
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    );
  }
}

export default App;
