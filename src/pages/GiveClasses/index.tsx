import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

import giveClassesBackgroundImage from '../../assets/images/give-classes-background.png';

import style from './style'

function GiveClasses () {

  const { goBack } = useNavigation();
  
  function handleNavigateToLanding () {
    goBack();
  } 

  return (
    <View style={style.container}>
      <ImageBackground 
        resizeMode="contain" 
        source={giveClassesBackgroundImage} 
        style={style.content}
      >
        <Text style={style.title}>
          Quer ser um Proffy?
        </Text>
        <Text style={style.description}>
          Para começar, você precisa se cadastrar como professor na nossa plataforma web
        </Text>

      </ImageBackground>

      <RectButton onPress={handleNavigateToLanding} style={style.okButton}>
        <Text style={style.okButtonText}>
          Tudo bem
        </Text>
      </RectButton>
      
    </View>
  )
}

export default GiveClasses;