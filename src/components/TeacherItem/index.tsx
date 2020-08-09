import React, { useState } from 'react';
import { View, Image, Text, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';

import style from './style'

export interface Teacher {
  name: string,
  avatar: string,
  whatsapp: string,
  bio: string,
  subject: string,
  cost: number,
  id: number,
}

interface TeacherItemProps {
  teacher: Teacher;
  favorited: boolean;
}

const TeacherList: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {

  const [isFavorited, setIsFavorited] = useState(favorited);

  function handleLinkToWhatsapp() {

    api.post('connections', {
      user_id: teacher.id,
    })

    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)

  }

  async function handleToggleFavorite() {

    const favorites = await AsyncStorage.getItem('favorites');

    let favoritesArray = []

    if (favorites) {
      favoritesArray = JSON.parse(favorites)
    }

    if (isFavorited) {
      // remove favorite

      const favoritedIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
        return teacherItem.id === teacher.id;
      })

      favoritesArray.splice(favoritedIndex, 1)

      setIsFavorited(false)

    } else {
      // add favorite
      
      favoritesArray.push(teacher)

      setIsFavorited(true)
    }

    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray))
  }

  return (
    <View style={style.container}>
      <View style={style.profile}>
        <Image
          style={style.avatar}
          source={{ uri: `${teacher.avatar}`}}
        />

        <View style={style.profileInfo}>
          <Text style={style.name}>{teacher.name}</Text>
          <Text style={style.subject}>{teacher.subject}</Text>
        </View>
      </View>

      <Text style={style.bio}>
        {teacher.bio}
      </Text>
    
      <View style={style.footer}>
        <Text style={style.price}>
          Preço/Hora {'   '}
          <Text style={style.priceValue}>R$ {teacher.cost} </Text>
        </Text>

        <View style={style.buttonsContainer}>
            <RectButton 
              onPress={handleToggleFavorite} 
              style={[
                style.favoriteButton, 
                isFavorited ? style.favorited : {},
              ]}
            >

              {
                isFavorited ? <Image source={heartOutlineIcon}/> : <Image source={unfavoriteIcon}/>
              }
               
            </RectButton>

            <RectButton style={style.contactButton} onPress={handleLinkToWhatsapp}>
              <Image source={whatsappIcon}/>
              <Text style={style.contactButtonText}>
                Entrar em contato
              </Text>
            </RectButton>
        </View>

      </View>

    </View>

  )
}

export default TeacherList;