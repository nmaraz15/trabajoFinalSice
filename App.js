import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { MainStackScreen } from './src/screens/event-list/MainStackScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { EventDetailScreen } from './src/screens/event-detail/EventDetailScreen'
import { EventDetailWebScreen } from './src/screens/event-detail/EventDetailWebScreen'
import { UserProvider } from './src/contexts/UserContext'


const EventListStack = createNativeStackNavigator()

export default function App () {
  return (
    <>
      <UserProvider>
        <NavigationContainer>
          <EventListStack.Navigator screenOptions={{ headerShown: false }}>
            {/* //Pantallas con Tab */}
            <EventListStack.Screen name='Main' component={MainStackScreen} />
            {/* //Pantallas sin Tab */}
            <EventListStack.Screen name='EventDetail' component={EventDetailScreen} />
            <EventListStack.Screen name='EventDetailWeb' component={EventDetailWebScreen} />
          </EventListStack.Navigator>
        </NavigationContainer>
        </UserProvider>
      <StatusBar style='auto' />
    </>
  )
}