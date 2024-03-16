import { View, Text, ScrollView, Pressable, TextInput, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, router, useRouter } from 'expo-router';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const Header = () => { 
  
  return (
  <View>
    <View className='flex mt-1 flex-row justify-between mx-5 '>
      <Link href={`/profile`} asChild>
      <TouchableOpacity>
        <Image
          source={{ uri: `https://img.freepik.com/premium-vector/young-muslim-woman-wearing-hijab-with-flower-aesthetic-profile_637377-334.jpg` }}
          className='w-12 h-12 rounded-full border-white border'
        />
      </TouchableOpacity>
      </Link>
      <Pressable>
        <Pressable>
          <FontAwesome
            name="bell"
            size={25}
            style={{ color: 'white', marginRight: 15 }}
          />
        </Pressable>
        <Text className=' absolute  top-0 left-3 z-0 text-center items-center justify-center flex p-1 scale-75 text-white text-sm bg-red-500 rounded-full w-6 h-6'>3</Text>
      </Pressable>
    </View>
    <View>
      <Text className='text-white/50 font-medium ml-9 mt-2 text-base'>Hi, Sarah</Text>
      <Text className='text-white font-medium ml-11 ' style={{ fontSize: hp(2.5) }}>Make Your Favorite food in you house, with <Text className='font-extrabold  text-yellow-500 leading-relaxed' style={{ fontSize: hp(2.3) }}> less cost </Text> </Text>
    </View>
  </View>
)
}
export default Header