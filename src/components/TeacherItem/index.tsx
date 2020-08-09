import React from 'react';
import { View, Image, Text, Linking } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

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
}

const TeacherList: React.FC<TeacherItemProps> = ({ teacher }) => {

  function handleLinkToWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
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
            <RectButton style={[style.favoriteButton, style.favorited]}>
              {/* <Image source={heartOutlineIcon}/> */}
              <Image source={unfavoriteIcon}/>
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