import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import landingImg from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'

import style from './style'

function Landing () {

  const { navigate } = useNavigation();

  function handleNavigateToGiveClasses() {
    navigate('GiveClasses')
  }

  function handleNavigateToStudyPages() {
    navigate('Study')
  } 

  return (
    <View style={style.container}>
      <Image source={landingImg} style={style.banner}/>

      <Text style={style.title}>
        Seja bem-vindo{'\n'}
        <Text style={style.titleBold}>O que deseja fazer?</Text>
      </Text>

      <View style={style.buttonsContainer}> 

        <RectButton onPress={handleNavigateToStudyPages} style={[style.button, style.buttonPrimary]}>
          <Image source={studyIcon} />

          <Text style={style.buttonText}>Estudar</Text>
        </RectButton>

        <RectButton onPress={handleNavigateToGiveClasses} style={[style.button, style.buttonSecondary]}>
          <Image source={giveClassesIcon} />

          <Text style={style.buttonText}>Dar aulas</Text>
        </RectButton>

      </View>

      <Text style={style.totalConnections}>
        Total de 185 conexões já realizadas {' '} <Image source={heartIcon}/>
      </Text>

    </View>
  )
}

export default Landing;