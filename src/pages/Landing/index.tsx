import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import landingImg from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'

import style from './style'

function Landing () {
  return (
    <View style={style.container}>
      <Image source={landingImg} style={style.banner}/>

      <Text style={style.title}>
        Seja bem-vindo{'\n'}
        <Text style={style.titleBold}>O que deseja fazer?</Text>
      </Text>

      <View style={style.buttonsContainer}> 

        <TouchableOpacity style={[style.button, style.buttonPrimary]}>
          <Image source={studyIcon} />

          <Text style={style.buttonText}>Estudar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[style.button, style.buttonSecondary]}>
          <Image source={giveClassesIcon} />

          <Text style={style.buttonText}>Dar aulas</Text>
        </TouchableOpacity>

      </View>

      <Text style={style.totalConnections}>
        Total de 185 conexões já realizadas {' '} <Image source={heartIcon}/>
      </Text>

    </View>
  )
}

export default Landing;