import React from 'react';
import { View } from 'react-native';

import PageHeader from '../../components/PageHeader'

import style from './style';

function TeacherList () {
  return(
    <View style={style.container}>
      <PageHeader title="Proffys disponível"/>
    </View>
  )
}

export default TeacherList;