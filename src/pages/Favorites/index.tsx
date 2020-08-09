import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem'

import style from './style';

function Favorites () {
  return(
    <View style={style.container}>
      <PageHeader title="Meus Proffys favoritos"/>


      <ScrollView style={style.teacherItems} contentContainerStyle={{
        paddingHorizontal: 16,
        paddingBottom: 16,
      }}>
        
      </ScrollView>
      
    </View>
  )
}

export default Favorites;