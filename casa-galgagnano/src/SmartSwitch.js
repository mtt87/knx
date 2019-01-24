import React, { PureComponent } from 'react';
import { Switch, View, Text } from 'react-native';

class SmartSwitch extends PureComponent {
  render() {
    const { name, id, value, onValueChange } = this.props;
    return (
      <View
        key={id}
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Switch
          style={{ marginRight: 10 }}
          value={Boolean(value)}
          onValueChange={onValueChange}
        />
        <View>
          <Text>{name}</Text>
        </View>
      </View>
    );
  }
}

export default SmartSwitch;
