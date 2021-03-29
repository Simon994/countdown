import React, { Component } from 'react'
import { Button, FlatList, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { getEvents } from './api'

import EventCard from './EventCard'

const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: 'red'
  }
})

class EventList extends Component {
  state = {
    events: []
  }

  async componentDidMount() {
    setInterval(() => {
      this.setState({
        events: this.state.events.map(evt => ({
          ...evt,
          timer: Date.now(),
        })),
      })
    }, 1000)

    getEvents()
      .then(
        events => this.setState({ events })
      )
  }

  render() {
    const {navigation} = this.props
    
    return (
      <>
        <FlatList
          data={this.state.events}
          renderItem={
            ({ item }) => <EventCard event={item} />
          }
          keyExtractor={item => item.id}
          style={styles.list}
        />
        <Button
          title="Add Event"
          onPress={() => navigation.navigate('AddEvent')}
        />
      </>
    )
  }
}

export default EventList