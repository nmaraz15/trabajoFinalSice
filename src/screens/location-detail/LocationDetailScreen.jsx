import React from 'react'
import { View, ScrollView, Image, Text } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { styles } from './LocationDetailScreen.styles'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../utils/theme'

export const LocationDetailScreen = ({ route }) => {
  const { item } = route.params
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <ScrollView horizontal pagingEnabled style={styles.imageContainer}>
          {item.images.map((image, idx) => (
            <Image key={idx} source={image} style={styles.image} resizeMode='cover' />
          ))}
        </ScrollView>
      </View>
   


      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.location}>{item.location}</Text>
        <Text style={styles.date}>{item.date}</Text>
        <View style={styles.ratingContainer}>
          <Ionicons name='star' size={20} color={COLORS.primary} />
          <Text style={styles.rating}>{item.rating}</Text>
          
          <View style={styles.assistantsContainer}>
          
          <Image source={require('../../../assets/images/assistent1.jpg')} style={styles.imageAssistants1}/>
          <Image source={require('../../../assets/images/assistent2.jpg')} style={styles.imageAssistants2}/>
          <Image source={require('../../../assets/images/assistent3.jpg')} style={styles.imageAssistants3}/>
          <Image source={require('../../../assets/images/assistent4.jpg')} style={styles.imageAssistants4}/>
          <Image source={require('../../../assets/images/total.jpg')} style={styles.imageAssistants5}/>
          </View>
      
       </View>


        <Text style={styles.description}>{item.description}</Text>
      </View>
    
    
     



      <MapView
        style={styles.map}
        initialRegion={{
          latitude: item.locationCoordinates.latitude,
          longitude: item.locationCoordinates.longitude,
          latitudeDelta: 0.002,
          longitudeDelta: 0.002
        }}
      >
        <Marker
          coordinate={{
            latitude: item.locationCoordinates.latitude,
            longitude: item.locationCoordinates.longitude
          }}
          title={item.title}
        />
      </MapView>
    </ScrollView>
  )
}
