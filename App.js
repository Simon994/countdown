import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import EventList from './EventList'
import EventForm from './EventForm'

const Stack = createStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={EventList}
          options={{title: 'My Events'}}
        />
        <Stack.Screen
          name="AddEvent"
          component={EventForm}
          options={{title: 'Add an Event'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App