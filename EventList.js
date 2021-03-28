import React, { Component } from 'react'
import { FlatList, StyleSheet } from 'react-native'

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
  
  componentDidMount() {
    setInterval(() => {
      this.setState({
        events: this.state.events.map(evt => ({
          ...evt,
          timer: Date.now(),
        })),
      })
    }, 1000)
    
    const events = require('./db.json').events.map(event => ({
      ...event,
      date: new Date(event.date)
    }))
    this.setState({ events })
  }

  render() {
    return (
      <FlatList
        data={this.state.events}
        renderItem={
          ({ item }) => <EventCard event={ item }/>
        }
        keyExtractor={ item => item.id }
        style={styles.list}
      />
    )
  }
}

export default EventList