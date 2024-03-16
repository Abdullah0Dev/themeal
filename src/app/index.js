import { View, Text, ScrollView, Pressable, TextInput, FlatList, Image, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { fetchFood } from './../../api/fetchFromAPI';
import { Catagories, Header, Promo, Search, TopSells } from './../components';
import { ClerkProvider, SignedIn, SignedOut, useAuth } from "@clerk/clerk-expo";
import SignIn from './singIn';

const Page = () => {


  return (
    <View>
      {/* <SignIn />
      <SignedIn> */}
      <SafeAreaView className='bg-[#192648] h-full'>
        <ScrollView>
          <Header />
          <Search />
          <Catagories />
        </ScrollView>
        <View>
          <StatusBar style='light' />
        </View>
      </SafeAreaView>
      {/* </SignedIn> */}
    </View>
  )
}

export default Page   