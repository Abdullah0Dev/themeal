import { View, Text, SafeAreaView, Image, ImageBackground, TouchableOpacity, Button, Pressable } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar'
import { SignedIn, useAuth } from '@clerk/clerk-expo';

const image = { uri: "https://w.forfun.com/fetch/d6/d655edc166afb054a32219f9ff27ab53.jpeg?h=600&r=0.5" };
const SignOut = () => {
  const { isLoaded, signOut } = useAuth();
  if (!isLoaded) {
    return null;
  }
  return (
    <View>
      <TouchableOpacity onPress={() => { signOut() }} >
        <Text className='text-white text-lg mx-16 rounded-2xl font-extrabold bg-blue-500 py-3 text-center '>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};
const Profile = () => {
  router = useRouter()
  return (
    <ImageBackground source={image} className='flex-1 bg-no-repeat h-full '>
      <View className='flex flex-row mt-9 mx-5 justify-between items-center '>
        <TouchableOpacity onPress={router.back} >
          <AntDesign name="left" size={27} color="white" />
        </TouchableOpacity>
        <Text className='text-yellow-500 font-bold text-xl'>Profile</Text>
      </View>
      <View className='absolute bottom-0 '>
        <Image
          source={{ uri: `https://img.freepik.com/premium-vector/young-muslim-woman-wearing-hijab-with-flower-aesthetic-profile_637377-334.jpg` }}
          className='w-52 h-52 rounded-full -mb-[9vh] z-50 self-center border-white border'
        />
        <View className='bg-white w-[100vw] rounded-t-2xl h-[40vh]'>
          <Text className='text-center font-bold mt-32 text-3xl  text-black/90'>Sarah  Johnson</Text>
          <Text className='text-center font-medium text-base  text-black/30'> _Best Women_</Text>
          <Text>
          </Text>
          <SignedIn>
            <SignOut />
          </SignedIn>
        </View>
        <StatusBar style='light' />
      </View>
    </ImageBackground>
  )
}

export default Profile