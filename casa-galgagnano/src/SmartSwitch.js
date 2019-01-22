import React, { Component } from 'react';
import { Switch, ActivityIndicator, View, Text } from 'react-native';

class SmartSwitch extends Component {
  state = {
    loading: true,
    value: false,
  };

  componentDidMount() {
    // fetch status
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  }

  render() {
    const { name, id } = this.props;
    const { value, loading } = this.state;
    return (
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        {loading ? (
          <ActivityIndicator color="#999" style={{ marginRight: 10 }} />
        ) : (
          <Switch
            style={{ marginRight: 10 }}
            value={this.state.status}
            onValueChange={v => this.setState({ status: v })}
          />
        )}
        <View>
          <Text>{name}</Text>
        </View>
      </View>
    );
  }
}

export default SmartSwitch;
