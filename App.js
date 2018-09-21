import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Theo from "./theo"; 

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {pressed: false};

    this.onPress = this.onPress.bind(this);
  }
  
  onPress() {
    this.setState((previous) => ({pressed : !previous.pressed}));
  }
  
  render() {
    const text = (<View>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
    </View>);

      return (
        <View style={styles.container}>
         <Theo onPress={this.onPress} text="this text works"/>
         {this.state.pressed
           ? text
           : null
           }

        </View>
      );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
