import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import backIcon from '../../assets/images/icons/back.png'
import logoIcon from '../../assets/images/logo.png'

import style from './style';

interface PageHeaderProps {
  title: string;
}

const PageHeader:React.FC<PageHeaderProps> = ({title}) => {

  const { navigate } = useNavigation();
  
  function handleGoBack() {
    navigate('Landing')
  }

  return (
    <View style={style.container}>
      <View style={style.topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain"/>
        </BorderlessButton>

        <Image source={logoIcon} resizeMode="contain"/>

      </View>

      <Text style={style.title}>{title}</Text>
    </View>
  )
}

export default PageHeader;