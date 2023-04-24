import React, { useContext } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { styles } from './UserInfoScreen.styles'
import { UserContext } from '../../contexts/UserContext'

export const UserInfoScreen = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)

  const handleLogout = () => {
    setCurrentUser(null)
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.profileImage}
          source={require('../../../assets/images/avatar.png')}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>{currentUser.username}</Text>
          <Text style={styles.profileLocation}>Jujuy, Argentina</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Salir</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Mi perfil</Text>
        <Text style={styles.sectionText}>
        Soy una persona proactiva, excelente compañera de equipo, 
        organizado y responsable. 
        Disfruto mucho aprender cosas nuevas, mi objetivo es un puesto desafiante y dinámico donde poder
         compartir mi experiencia y a su vez sumar nuevos conocimientos.
        </Text>
        <Text style={styles.sectionTitle}>Intereses</Text>
        <Text style={styles.sectionText}>
        Busco entrar en una empresa en donde pueda aplicar todos los conocimientos adquiridos 
        en la universidad y mi carrera profesional.
        </Text>
      </View>

    </ScrollView>
  )
}
