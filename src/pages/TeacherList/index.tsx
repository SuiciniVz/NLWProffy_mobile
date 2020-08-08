import React, { useState } from 'react';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { View, ScrollView, Text, TextInput } from 'react-native';

import { Feather } from '@expo/vector-icons'

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'

import style from './style';

function TeacherList () {

  const [isFilterVisible, setFilterVisible] = useState(false); 

  function handleToggleFiltersVisible() {
    setFilterVisible(!isFilterVisible)
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
              placeholder="Qual a matéria?"
              placeholderTextColor="#c1bccc"
            />  

            <View style={style.inputGroup}>
              <View style={style.inputBlock}>
                <Text style={style.label}>Dia da semana</Text>
                <TextInput 
                  style={style.input} 
                  placeholder="Qual a dia?"
                  placeholderTextColor="#c1bccc"
                />
              </View>

              <View style={style.inputBlock}>
                <Text style={style.label}>Horário</Text>
                <TextInput 
                  style={style.input} 
                  placeholder="Qual horário?"
                  placeholderTextColor="#c1bccc"
                />
              </View>

            </View>

            <RectButton style={style.submitButton}>
              <Text style={style.submitButtonText}>Filtrar</Text>
            </RectButton>

          </View>

        )}
        
      </PageHeader>


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