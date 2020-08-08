import React from 'react';
import { View, ScrollView } from 'react-native';

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'

import style from './style';

function TeacherList () {
  return(
    <View style={style.container}>
      <PageHeader title="Proffys disponível"/>


      <ScrollView style={style.teacherItems} contentContainerStyle={{
        paddingHorizontal: 16,
        paddingBottom: 16,
      }}>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
      
    </View>
  )
}

export default TeacherList;