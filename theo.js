import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Theo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
    
    render() {
        return (<View>
        <Text>Theo Test!</Text>
        <Button onPress={this.props.onPress} title="Press Me"/>
        </View>);
  }
}

export default Theo;