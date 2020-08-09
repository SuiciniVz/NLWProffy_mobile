import React, { useState, useEffect } from 'react';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { View, ScrollView, Text, TextInput } from 'react-native';

import { Feather } from '@expo/vector-icons'

import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'

import AsyncStorage from '@react-native-community/async-storage'
import api from '../../services/api';

import style from './style';

function TeacherList () {

  const [teachers , setTeachers] = useState([]);

  const [isFilterVisible, setFilterVisible] = useState(false); 
  const [favorites, setFavorites] = useState<number[]>([])

  const [subject, setSubject] = useState('');
  const [week_day, setWeek_day] = useState('');
  const [time, setTime] = useState('');

  async function handleFiltersSubmit () {

    loadFavoriteTeacher();

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    })
    setFilterVisible(false)
    setTeachers(response.data);

  }

  function handleToggleFiltersVisible() {
    setFilterVisible(!isFilterVisible)

  }

  function loadFavoriteTeacher() {
    AsyncStorage.getItem('favorites').then(res => {

      if(res) {

        const favoritedTeachers = JSON.parse(res);
        const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
          return teacher.id;
        })


        setFavorites(favoritedTeachersIds)
      }

    })
  }

  return(
    <View style={style.container}>

      <PageHeader title="Proffys disponível" headerRight={(
        <BorderlessButton>
          <Feather onPress={handleToggleFiltersVisible} name="filter" size={20} color="#fff" /> 
        </BorderlessButton>
      )}>

        { isFilterVisible && (

          <View style={style.searchForm}>

            <Text style={style.label}>Materia</Text>
            <TextInput 
              style={style.input} 
              value={subject}
              onChangeText={text => setSubject(text)}
              placeholder="Qual a matéria?"
              placeholderTextColor="#c1bccc"
            />  

            <View style={style.inputGroup}>
              <View style={style.inputBlock}>
                <Text style={style.label}>Dia da semana</Text>
                <TextInput 
                  style={style.input} 
                  value={week_day}
                  onChangeText={text => setWeek_day(text)}
                  placeholder="Qual a dia?"
                  placeholderTextColor="#c1bccc"
                />
              </View>

              <View style={style.inputBlock}>
                <Text style={style.label}>Horário</Text>
                <TextInput 
                  style={style.input} 
                  value={time}
                  onChangeText={text => setTime(text)}
                  placeholder="Qual horário?"
                  placeholderTextColor="#c1bccc"
                />
              </View>

            </View>

            <RectButton onPress={handleFiltersSubmit} style={style.submitButton}>
              <Text style={style.submitButtonText}>Filtrar</Text>
            </RectButton>

          </View>

        )}
        
      </PageHeader>


      <ScrollView style={style.teacherItems} contentContainerStyle={{
        paddingHorizontal: 16,
        paddingBottom: 16,
      }}>
        
        {
          teachers.map((teacher: Teacher) => {
            return (
              <TeacherItem 
                key={teacher.id} 
                teacher={teacher} 
                favorited={favorites.includes(teacher.id)} 
              /> 
            )
          })
        }

      </ScrollView>
      
    </View>

  )
}

export default TeacherList;