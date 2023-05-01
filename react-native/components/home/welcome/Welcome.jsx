import React, { useState } from 'react'
import { 
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image
 } from 'react-native'

import { useReducer, useRouter } from 'expo-router'
import styles from './welcome.style'
import { icons, SIZES } from "../../../constants"

const jobTypes = ["Full-time", "Part-time", "Contractor"]

const Welcome = () => {
  const router = useRouter();

  return (
    <View>
      <View style={styles.container}>
          <Text style={styles.userName}>Hello! Afzal</Text>
          <Text style={styles.welcomeMessage}>Find Your Perfect Job</Text>
      
          <View style={styles.searchContainer}>
              <View style={styles.searchWrapper}>
                <TextInput 
                  style={styles.searchInput}
                  value=""
                  onChange={() => {}}
                  placeholder='What are you looking for?'
                />
              </View>
              
              <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
                  <Image 
                    source={icons.search}
                    resizeMode='contain'
                    style={styles.searchBtnImage}
                  />
                </TouchableOpacity>
          </View>

          <View style={styles.tabsContainer}>
              <FlatList 
                data={jobTypes}
                renderItem={({item}) => (
                    <TouchableOpacity>
                      <Text>{item}</Text>
                    </TouchableOpacity>
                )}
              />
          </View>
      </View>
    </View>
  )
}

export default Welcome