import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  TextInput
} from 'react-native'


const styles = StyleSheet.create({
  fieldContainer: {
    margin: 20,
    backgroundColor: 'blue'
  },
  eventInput: {
    backgroundColor: '#333',
    color: 'white',
    padding: 10,
    fontSize: 22
  },
  button: {
    height: 50,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    alignSelf: 'stretch',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  }
})

class EventForm extends Component {

  state = {
    text: ''
  }


  handleAddPress = () => {
    console.log(this.state)
    this.props.navigation.navigate('Home')
  }

  handleChangeText = (text) => {
    this.setState({
      text
    })
  }

  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <View style={styles.fieldContainer}>
          <TextInput
            placeholder='Event title'
            style={styles.eventInput}
            placeholderTextColor='white'
            spellCheck={false}
            onChangeText={this.handleChangeText}
            value={this.state.text}
          ></TextInput>
        </View>
        <TouchableHighlight
          onPress={this.handleAddPress}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default EventForm