import React, {useState} from 'react'
import {View, Switch, StyleSheet} from 'react-native'

export const AnimatedSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled(previousState => !previousState)

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{false: '#263238', true: '#B57EDC'}}
        thumbColor={isEnabled ? '#630b57' : '#F1F1F1'}
        ios_backgroundColor="#F1F1F1"
        onValueChange={toggleSwitch}
        value={isEnabled}
        
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100
  }
})

