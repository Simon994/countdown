import React, { Component } from 'react'
import {
  Keyboard,
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  TextInput
} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import { formatDate } from './api'


const styles = StyleSheet.create({
  fieldContainer: {
    margin: 20,
    backgroundColor: '#fff'
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
  },
  dateInput: {
    borderTopWidth: 0.5,
    borderTopColor: '#333',
    backgroundColor: 'white',
    color: 'black'
  }
})

class EventForm extends Component {

  state = {
    text: '',
    date: new Date(1598051730000),
    show: false
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

  handleDatePress = () => {
    this.setState({
      show: true
    })
  }

  setDate = (event, selectedDate) => {
    const newDate = selectedDate  || this.state.date
    this.setState({
      date: newDate,
      show: false
    })
    Keyboard.dismiss()
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
          <TextInput
            style={[styles.eventInput, styles.dateInput]}
            placeholder='Date'
            value={formatDate(this.state.date.toString())}
            onFocus={this.handleDatePress}
          ></TextInput>
        </View>
        <TouchableHighlight
          onPress={this.handleAddPress}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
        {this.state.show &&
          <DateTimePicker
            value={this.state.date}
            is24Hour={true}
            display="default"
            onChange={this.setDate}
          />
        }
      </View>
    )
  }
}

export default EventForm