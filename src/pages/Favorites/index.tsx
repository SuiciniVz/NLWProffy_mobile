import React from 'react';
import { View } from 'react-native';

import PageHeader from '../../components/PageHeader';

import style from './style';

function Favorites () {
  return(
    <View style={style.container}>
      <PageHeader title="Meus proffys favoritos"/>
    </View>
  )
}

export default Favorites;