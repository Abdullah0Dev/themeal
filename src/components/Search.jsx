import { View, TextInput, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';


const Search = ({ handleSearch }) => (
  <View className='flex  mt-5'>
    <FontAwesome
      onPress={handleSearch}
      style={{ position: 'absolute', bottom: 16, right: 49, zIndex: 1000, }}
      name='search'
      color={'#566772'}
      size={22}
    />
    <TextInput
      onChange={handleSearch}
      placeholderTextColor={'#566772'} placeholder='Search...'
      className='pl-6 text-xl bg-black/5 text-white/30 mx-5 h-14 rounded-r-full  rounded-tl-full' />
  </View>
)

export default Search