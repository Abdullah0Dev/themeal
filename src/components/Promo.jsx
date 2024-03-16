import { View, Text, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link, useRouter, useSegments } from 'expo-router';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';


const Promo = ({ randomMeal }) => {
  const router = useRouter();
  const handlePressed = (id) => {
    router.push(id?.idMeal)
  }
  const segments = useSegments();
  return (
    <View className='mt-3'>
      <Text className='text-white font-bold mb-5 text-2xl ml-3 mt-2'>Promo</Text>

       <View>
        <Link push href={`/${segments[0]}/${randomMeal.idMeal}`} asChild>
          <Pressable
            //    onPress={()=>handlePressed(randomMeal)}
            // style={{ paddingLeft: isEven ? 0 : 8, paddingRight: isEven ? 8 : 0 }}
            className='w-[100%] mb-5  rounded-b-2xl space-y-2 flex justify-center ' >

            <Image
              className=' rounded-2xl bg-blue-300'
              style={{ width: `100%`, height: hp(35) }}
              source={{ uri: `https://www.themealdb.com/images/media/meals/wssvvs1511785879.jpg`}}
            />
            <Text className=' absolute bottom-0  bg-black/20 py-3 w-full left-0 text-xl font-bold text-white text-center'>
              {/* {randomMeal && randomMeal.strMeal ? (randomMeal.strMeal.length > 22 ? randomMeal.strMeal.slice(0, 20) + '...' : randomMeal.strMeal) : ""} */}
              {/* {randomMeal.strMeal} */}
              Food Text
            </Text>
          </Pressable>
        </Link>
      </View>
 
    </View>
  )
}

export default Promo