import React from 'react';
import { View, Image, Text } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import style from './style'

function TeacherList () {
  return (
    <View style={style.container}>
      <View style={style.profile}>
        <Image
          style={style.avatar}
          source={{ uri: 'https://avatars3.githubusercontent.com/u/50074236?s=460&u=167bed6198c0b8e80e4780f0f4a085019e92fe2f&v=4'}}
        />

        <View style={style.profileInfo}>
          <Text style={style.name}>Lucas Vinicius</Text>
          <Text style={style.subject}>Geografia</Text>
        </View>
      </View>

      <Text style={style.bio}>
        Amanha eu acordei hoje blablabla preenchendo espaço para testar o style da pagina caramba ficou muito dahora
      </Text>
    
      <View style={style.footer}>
        <Text style={style.price}>
          Preço/Hora {'   '}
          <Text style={style.priceValue}>R$ 6,45</Text>
        </Text>

        <View style={style.buttonsContainer}>
            <RectButton style={[style.favoriteButton, style.favorited]}>
              {/* <Image source={heartOutlineIcon}/> */}
              <Image source={unfavoriteIcon}/>
            </RectButton>

            <RectButton style={style.contactButton}>
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