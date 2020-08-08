import React from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'

import { useNavigation } from '@react-navigation/native'

import style from './style'

function GiveClasses () {

  const { navigate } = useNavigation();
  
  function handleNavigateToLanding () {
    navigate('Landing')
  }

  return (
    <View>
      <RectButton onPress={handleNavigateToLanding} style={style.button}>
        <Text>
          Voltar
        </Text>
      </RectButton>
    </View>
  )
}

export default GiveClasses;