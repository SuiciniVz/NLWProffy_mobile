import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native'

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem'

import style from './style';

import AsyncStorage from '@react-native-community/async-storage';

function Favorites () {

  const [favorites, setFavorites] = useState([])

  function loadFavoriteTeacher() {
    
    AsyncStorage.getItem('favorites').then(res => {

      if(res) {
        const favoritedTeachers = JSON.parse(res);
   
        setFavorites(favoritedTeachers)
      }

    })
  }

  useFocusEffect(
    React.useCallback(() => {
      loadFavoriteTeacher();
    },[])
  )

  return(
    <View style={style.container}>
      <PageHeader title="Meus Proffys favoritos"/>


      <ScrollView style={style.teacherItems} contentContainerStyle={{
        paddingHorizontal: 16,
        paddingBottom: 16,
      }}>
        {
          favorites.map((teacher: Teacher) => {
            return <TeacherItem  key={teacher.id} teacher={teacher} favorited={true} />
          })
        }
      </ScrollView>
      
    </View>
  )
}

export default Favorites;