import React, { Component } from 'react'
import { Text, FlatList } from 'react-native'

import EventCard from './EventCard'

class EventList extends Component {
  state = {
    events: []
  }
  
  componentDidMount() {
    const events = require('./db.json').events
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
      />
    )
  }
}

export default EventList