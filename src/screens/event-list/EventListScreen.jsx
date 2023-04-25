import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, FlatList, Pressable, Image } from 'react-native'
import { styles } from './EventListScreen.styles'
//import { data } from '../../api/data'
import { SearchBar } from '../../components/search-bar/SearchBar'
import { getEventList } from '../../api/event.service'



export const EventListScreen = ({ navigation }) => {
const [searchQuery, setSearchQuery] = useState('')
const [eventList, setEventList] = useState([])

const handleSearch = (query) => {
  setSearchQuery(query)
}


const filteredEvents=eventList.filter(event=> (
  event.title.toLowerCase().includes(searchQuery.toLowerCase())
))


useEffect(() => {
  getEventList()
    .then(data => {
      setEventList(data)
    })
    .catch(err => console.log(err))
}, [])



  const event = ({ item }) => (
    <Pressable onPress={() =>  navigation.navigate('EventDetail', { item })}>
      <View style={styles.itemContainer}>
      <Image source={{ uri: `https://drive.google.com/uc?id=${item.images[0]}` }} style={styles.itemImage} />
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemDate}>{item.date}</Text>
      </View>
    </Pressable>
  )

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar handleSearch={handleSearch} searchQuery={searchQuery} />
      <FlatList
        data={filteredEvents}
        renderItem={event}
        keyExtractor={item => item.id}
        style={styles.itemList}
      />
    </SafeAreaView>
  )
}
