import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';

class Theo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      textValue :''
    };
  }

    render() {
        const length = this.state.textValue.length;

        return (<View>

        <Text>Theo App Example!</Text>
        <Text>Number of characters: {length}</Text>
        <Button onPress={this.props.onPress} title="Press Me - Toggle"/>
        
        <TextInput
        style={{height: 80}}
        onChangeText={(text) => this.setState({textValue : text})}
        multiline={true} />
        
        <Button onPress={() => {Alert.alert('You are awesome!');}} title="Press Me :)"/>


        </View>);

        
  }
  
}

export default Theo;